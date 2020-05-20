import env from './api-env'

const host = {
  mock: '/',
  dev: '/',
  prod: '/'
}

export default host[env]