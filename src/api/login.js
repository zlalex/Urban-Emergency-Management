import Ajax from '../axios'
import url from './api.url'

export const loginRequest = () => Ajax.get(url.login)