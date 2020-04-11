import * as types from './mutations.type'
import {
	setSessionStorage
} from '@/utils'

export default {
	[types.UPDATE_STATE](state, data) {
		const { user, token, modules } = data
		state.user.info = user
		state.user.token = token
		state.user.modules = modules
		setSessionStorage(state)
	},

	[types.RENDER_STATE](state, data) {
		const { user } = data
		state.user = user
		setSessionStorage(state)
	},
	[types.SET_INDEX_BOTTOM_TYPE](state, val) {
		state.indexBottomType = val
	}
}