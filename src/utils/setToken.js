import randomToken from '@/utils/randomToken'
export default (token = randomToken()) => sessionStorage.setItem('P_TOKEN', JSON.stringify(token))