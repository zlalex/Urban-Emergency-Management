const defaultUserData = {
	user: {
		'user': {},
		'modules': [],
		'token': ''
	}
}

const _toString = Object.prototype.toString
const _typeof = type => data => _toString.call(data).slice(8, -1) === type

export const __dataType = {
	isNumber: _typeof('Number'),
	isString: _typeof('String'),
	isObject: _typeof('Object'),
	isArray: _typeof('Array'),
	isDate: _typeof('date'),
	isFunction: _typeof('Function'),
	notBasic: (data) => typeof data === 'object' && data === null
}

export const setSessionStorage = (val) => {
	try {
		const str = JSON.stringify(val)
		sessionStorage.setItem('UEM_STATE', str)
	} catch (e) {
		console.warn('🍍', 'error session storage')
	}
}

export const getSessionStorage = () => {
	try {
		const json = sessionStorage.getItem('UEM_STATE')
		const data = json ? JSON.parse(json) : defaultUserData
		return data
	} catch (e) {
		console.warn('🍍', 'error session storage')
		return defaultUserData
	}
}

// [tips]涉及挂载Vue.prototype的方法，不能使用箭头函数。
export const goRoute = function (params) {
	__dataType.notBasic(params) ? this.$router.push({
		path: params.path,
		query: params.query
	}) : this.$router.push(params)
}