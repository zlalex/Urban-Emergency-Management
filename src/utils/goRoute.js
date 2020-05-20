import dataType from './dataType'

export default function (params) {
  dataType.notBasic(params) ? this.$router.push({
    path: params.path,
    query: params.query
  }) : this.$router.push(params)
}