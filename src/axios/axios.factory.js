import axios from 'axios'
import config from './axios.config'
import {
	getSessionStorage
} from '@/utils'
var token = ''
const CancelToken = axios.CancelToken
const CANCEL_OBJ = {}
const transformRequestPayload = data => JSON.stringify(data)
const getRequestName = (config) => {
	let { method, url } = config
	let map = url.split('/')
	// 根据 url 与 method 截取拼接成 functionName
	// 复用的情况下，根据不同项目的 url 命名规则更改 map 逻辑
	if (map && map.length) {
		let index = map.findIndex(el => el === 'api')
		let urlName = map.reduce((total, el, i) => {
			if (i < index + 2) {
				return total
			}

			return total + el
		}, '')

		method = method.charAt(0).toUpperCase() + method.slice(1)
		urlName = urlName.charAt(0).toUpperCase() + urlName.slice(1)

		return `cancel${method + urlName}`
	}

	return false
}

const cancelCallback = config => {
	const cancelName = getRequestName(config)
	cancelName && CANCEL_OBJ[cancelName] && (CANCEL_OBJ[cancelName] = null)
}

// token添加 cancelToken添加
const interceptorsRequest = config => {
	const cancelName = getRequestName(config)

	if(!token){
		const store = getSessionStorage()
		token = store.user.token
	}

	if (token) {
		config.headers.common['Authorization'] = `Bearer ${token}`
	}

	cancelName && CANCEL_OBJ[cancelName] && CANCEL_OBJ[cancelName]()
	config.cancelToken = new CancelToken(function executor(cb) {
		CANCEL_OBJ[cancelName] = cb
	})

	if (config.method === 'post' && config.headers['Content-Type'] === 'application/json;charset=utf-8') {
		config.transformRequest = [transformRequestPayload]
	}

	return config
}

// axios 实例对象
const instance = axios.create(config)

// 请求拦截
instance.interceptors.request.use(interceptorsRequest, error => {
	error.data = {
		code: -1,
		msg: '请求错误！',
	}

	cancelCallback(error.config)
	return error
})

// 响应拦截
instance.interceptors.response.use(response => {
	// 可以对返回数据再处理
	cancelCallback(response.config)
	return response
}, error => {
	if (error.response) {
		if (error.response.status > 400 || !error.response.data) {
			error.response.data = {
				code: error.response.status,
				msg: error.response.statusText,
			}
		}
		cancelCallback(error.config)
		return error.response
	}

	return {
		code: '',
		msg: 'error',
	}
})

export default instance
