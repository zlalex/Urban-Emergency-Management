import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from './components/elements'
import packages from './components/package'
import widgets from './components/widget'

import './iconfont'
import './lib/lushu.min.js'
import './echarts'
import './utils/register'
import './styles/reset.css'
import './styles/index.styl'

Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(packages)
Vue.use(widgets)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
