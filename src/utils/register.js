import Vue from 'vue'
import goRoute from '@/utils/goRoute'

Vue.prototype.$GoRoute = goRoute
Vue.prototype.$EventBus = new Vue()