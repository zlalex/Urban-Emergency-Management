import Vue from 'vue'
import App from './App.vue'
import api from '@/api/api.url'
console.log(api)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
