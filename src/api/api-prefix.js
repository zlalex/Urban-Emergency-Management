import env from './api-env'

const prefix = {
  mock: './mock/',
  dev: 'api/',
  prod: 'api/'
}

export default prefix[env]