import prefix from './api-prefix'
import mock from './api-mock'
import prod from './api-prod'

const urlMap = {
  mock,
  prod,
  dev: prod
}
const env = process.env.VUE_APP_ENV
const globalUrl = urlMap[env]
const result = Object.keys(globalUrl).reduce((total, api) => {
  total[api] = prefix + globalUrl[api]
  return total
}, {})

export default result