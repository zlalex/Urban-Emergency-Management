import * as types from './mutations.type'
import {
	loginRequest
} from '@/api/login'

export const loginAction = ({ commit }) => {
	loginRequest().then(res => {
		commit(types.UPDATE_STATE, res.data)
	})
}

