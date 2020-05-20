import Vue from 'vue'
import Router from 'vue-router'
import path from './path'
import getToken from '@/utils/getToken'

let token = ''
const {
	event,
	index,
	login,
	datum,
	empty,
	datumAutomobile,
	datumCompany,
	datumCargo
} = path
const routes = [
	{
		path: '/',
		component: index,
	},
	{
		path: '/login',
		component: login,
	},
	{
		path: '/event',
		component: event
	},
	{
		path: '/404',
		component: empty
	},
	{
		path: '/datum',
		component: datum,
		children: [
			{
				path: 'automobile',
				component: datumAutomobile
			},
			{
				path: 'company',
				component: datumCompany
			},
			{
				path: 'cargo',
				component: datumCargo
			},
		]
	},
]
const paths = routes.reduce((total, route) => {
	if (route.path === '/404') {
		return total
	}
	if (route.children && route.children.length) {
		route.children.reduce((innerTotal, childRoute) => {
			innerTotal.push(`${route.path}/${childRoute.path}`)
			return innerTotal
		}, total)
		return total
	} else {
		total.push(route.path)
		return total
	}
}, [])

Vue.use(Router)

const VueRouter = new Router({ routes })

VueRouter.beforeEach((to, from, next) => {
	if (to.path === '/404' || (to.path === '/login' && !token)) {
		next()
		return
	}
	if (!token) {
		token = getToken()
	}
	token ? paths.includes(to.path) ? next() : next('/404') : next('/login')
})

export default VueRouter
