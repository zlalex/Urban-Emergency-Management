import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from './components/elements'
import './echarts'
import './utils/register'
import './styles/reset.css'
import './styles/index.styl'

Vue.config.productionTip = false
Vue.use(elementUI)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
