import host from '@/api/api.host'
import {
	CONTENT_TYPE
} from '@/config'

const config = {
	baseURL: host,
	headers: {
		post: CONTENT_TYPE,
	},
}
export default config
