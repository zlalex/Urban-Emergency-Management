import randomToken from '@/utils/randomToken'
import dataType from '@/utils/dataType'

export default (token = randomToken()) => sessionStorage.setItem('P_TOKEN', dataType.notBasic(token) ? JSON.stringify(token) : token)