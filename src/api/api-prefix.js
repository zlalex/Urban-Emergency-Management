import env from './api-env'

// api url 前缀目录，个别项目存在。
const prefix = {
  mock: './mock/',
  dev: 'api/',
  prod: 'api/'
}

export default prefix[env]