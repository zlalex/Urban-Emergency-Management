import host from '@/api/api-host'

const config = {
  baseURL: host,
  headers: {
    post: {
      'Content-Type': 'application/json;charset=utf-8',
    }
  },
}

export default config
