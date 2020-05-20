import axios from 'axios'
import config from './axios.config'
import getToken from '@/utils/getToken'

let token = ''
const CancelToken = axios.CancelToken
const CANCEL_MAP = {}
const transformRequestPayload = data => JSON.stringify(data)
const getRequestName = (config) => {
  let { method, url } = config
  let map = url.split('/')
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
    return `${method + urlName}`
  }
  return false
}
const cancelCallback = config => {
  const cancelName = getRequestName(config)
  cancelName && CANCEL_MAP[cancelName] && (CANCEL_MAP[cancelName] = null)
}
const interceptorsRequest = config => {
  const cancelName = getRequestName(config)
  if (!token) {
    token = getToken()
  }
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`
  }
  cancelName && CANCEL_MAP[cancelName] && CANCEL_MAP[cancelName]()
  config.cancelToken = new CancelToken(function executor(cb) {
    CANCEL_MAP[cancelName] = cb
  })
  if (config.method === 'post' && config.headers['Content-Type'] === 'application/json;charset=utf-8') {
    config.transformRequest = [transformRequestPayload]
  }
  return config
}
const instance = axios.create(config)

instance.interceptors.request.use(interceptorsRequest, error => {
  error.data = {
    code: -1,
    msg: '请求错误！',
  }
  cancelCallback(error.config)
  return error
})

instance.interceptors.response.use(response => {
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
