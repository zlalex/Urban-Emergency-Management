const defaultPage = () => import(/* webpackChunkName: "group-foo" */'@/views/default/default.vue')
const indexPage = () => import(/* webpackChunkName: "group-foo" */'@/views/index/index.vue')
const automobilePage = () => import(/* webpackChunkName: "group-foo" */'@/views/automobile/automobile.vue')
const loginPage = () => import(/* webpackChunkName: "group-foo" */'@/views/login/login.vue')
const errorPage = () => import(/* webpackChunkName: "group-foo" */'@/views/error/error.vue')
const emptyPage = () => import(/* webpackChunkName: "group-foo" */'@/views/empty/empty.vue')

// 路由懒加载
export default {
	defaultPage,
	indexPage,
	automobilePage,
	loginPage,
	errorPage,
	emptyPage,
}