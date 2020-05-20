// module.exports = file => () => import('@/pages/' + file + '.vue')
// module.exports = file => () => import(/* webpackChunkName: "pageName" */'@/pages/' + file + '.vue')
module.exports = file => resolve => require(['@/pages/' + file + '.vue'], resolve)
