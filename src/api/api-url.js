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

export default result