import Vue from 'vue'

const echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
// 引入柱状图
require('echarts/lib/chart/bar');

Vue.prototype.$echarts = echarts
