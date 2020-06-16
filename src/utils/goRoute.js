import dataType from '@/utils/dataType'

export default function (params) {
  const path = dataType.notBasic(params) ? params.path : params
  if (!this.$route || !this.$router) {
    return
  }
  if (this.$route.path === path) {
    return
  }
  this.$router.push(params)
}