import * as types from './mutations.type'
import {
	loginRequest
} from '@/api/login'
const randomCode = () => Math.random().toString(32).slice(2)
export const loginAction = ({ commit }) => {
	loginRequest().then(res => {
		// mock token
		res.data.token = randomCode()
		commit(types.UPDATE_STATE, res.data)
	})
}

