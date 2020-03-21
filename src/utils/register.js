import Vue from 'vue'
import {
	goRoute
} from './index'

Vue.prototype.$goRoute = goRoute
Vue.prototype.$BUS = new Vue()