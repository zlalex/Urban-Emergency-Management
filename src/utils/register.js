import Vue from 'vue'
import goRoute from './goRoute'

Vue.prototype.$goRoute = goRoute
Vue.prototype.$EventBus = new Vue()