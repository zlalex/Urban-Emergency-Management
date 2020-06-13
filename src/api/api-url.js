import prefix from './api-prefix'
import mock from './api-mock'
import prod from './api-prod'
import env from './api-env'

const urlMap = {
  mock,
  prod,
  dev: prod
}
const globalUrl = urlMap[env]
const result = Object.keys(globalUrl).reduce((total, api) => {
  total[api] = prefix + globalUrl[api]
  return total
}, {})

// 根据host、url得到实际使用的api url
// 功能略鸡肋，如果api前缀不统一的话，这个方法就毫无意义
export default result