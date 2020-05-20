import Vue from 'vue'
import App from '@/pages/App.vue'
import Elements from '@/components/elements'
import Packages from '@/components/packages'
import router from '@/router'
import store from '@/store'
import '@/utils/register'
import '@/echarts'
import '@/styles/reset.scss'
import '@/styles/common.scss'

Vue.config.productionTip = false
Vue.use(Elements)
Vue.use(Packages)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
