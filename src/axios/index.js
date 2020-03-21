import axios from './axios.factory'

const handlerRequestError = (error) => {
	if (error.data) {
		return error.data
	}

	// 当没有 error.data 时，说明触发了 cancelToken 逻辑
	return {
		code: -2,
		msg: '频繁操作！',
	}
}

class Ajax {
	get(url, data) {
		return axios.get(url, { params: data })
			.then(response => response.data)
			.catch(handlerRequestError)
	}
	post(url, data, config) {
		if (config) {
			return axios.post(url, data, config)
				.then(response => response.data)
				.catch(handlerRequestError)
		} else {
			return axios.post(url, data)
				.then(response => response.data)
				.catch(handlerRequestError)
		}
	}
}

export default new Ajax()
