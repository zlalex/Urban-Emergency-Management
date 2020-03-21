import Vue from 'vue'
import Router from 'vue-router'
import path from './components.path'

Vue.use(Router)
const routerMenus = [
	{
		path: '/',
		component: path.indexPage
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

// 权限与路由拦截
VueRouter.beforeEach((to, from, next) => {
	console.log({ to: to.path, from: from.path })
	next()
})

export default VueRouter
