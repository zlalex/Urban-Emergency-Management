// 通过环境变量设置不同开发环境下的接口前缀
const env = process.env.VUE_APP_ENV
const prefix = {
	mock: './mock/',
	dev: '',
	prod: ''
}
export default prefix[env]