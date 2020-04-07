import Vue from 'vue'
import Router from 'vue-router'
import path from './components.path'

Vue.use(Router)
console.log(path.eventPage)
const routerMenus = [
	{
		path: '/',
		component: path.indexPage
	},
	{
		path: '/event',
		component: path.eventPage
	}
]

const VueRouter = new Router({
	routes: [
		{
			path: '/',
			component: path.defaultPage,
			children: routerMenus
		},
		{
			path: '/login',
			component: path.loginPage,
		},
		{
			path: '/error',
			component: path.errorPage,
		},
		{
			path: '/empty',
			component: path.emptyPage,
		}
	],
})

// 权限与路由拦截[tips]一个低级错误，设置路由拦截后，没有执行next()导致页面无法跳转。
// VueRouter.beforeEach((to, from, next) => {
// 	console.log({ to: to.path, from: from.path })
// 	next()
// })

export default VueRouter
