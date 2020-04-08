const _import_ = require('./_import_' + process.env.NODE_ENV + '.js')
// [tips]常规懒加载
// const defaultPage = () => import(/* webpackChunkName: "pageName" */'@/views/default/default.vue')
// [tips]开发环境时不开启路由懒加载，减少运行时热更新编译时长
const defaultPage = _import_('default/default')
const indexPage = _import_('index/index')
const loginPage = _import_('login/login')
const errorPage = _import_('error/error')
const emptyPage = _import_('empty/empty')
const eventPage = _import_('event/events')
const automobilePage = _import_('automobile/automobile')
const productDocPage = _import_('product-doc/product-doc')
const dangerPage = _import_('danger/danger')
const businessPage = _import_('business/business')

export default {
	defaultPage,
	indexPage,
	automobilePage,
	loginPage,
	errorPage,
	emptyPage,
	eventPage,
	dangerPage,
	businessPage,
	productDocPage
}