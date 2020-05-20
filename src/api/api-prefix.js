const env = process.env.VUE_APP_ENV
const prefix = {
  mock: './mock/',
  dev: 'api/',
  prod: 'api/'
}

export default prefix[env]