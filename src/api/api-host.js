const env = process.env.VUE_APP_ENV
const host = {
  mock: '/',
  dev: '/',
  prod: '/'
}

export default host[env]