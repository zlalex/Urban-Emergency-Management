// 不同账号加载不同首页
// 账号下不同权限设置加载不同模块。
// admin 账户加载所有模块
// default 账户根据 modules 显示模块
export default {
	admin: {
		auths: [
			'id001'
		],
		modules: [
			''
		]
	},
	default: {
		auths: [
			''
		],
		modules: [
			'danger',
		]
	}

}