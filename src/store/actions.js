import * as types from './mutations.type'
import {
	loginRequest
} from '@/api/login'

const data = {
	'user': {
		'username': '周亮',
		'userid': '1006'
	},
	'modules': [
		'index',
		'danger',
		'login'
	],
	'token': 'abcd'
}

export const loginAction = ({ dispatch, commit }) => {
	loginRequest().then(res => {
		console.log(res)
	})
	setTimeout(() => {
		dispatch('initPageAction')
		commit(types.UPDATE_STATE, data)
	}, 1e3)
}

export const initPageAction = ({ state }) => {
	console.log('init page action', state)
}

