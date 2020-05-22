import RegionData from '@/models/RegionData'
import DangerSource from '@/model/DangerSource'

export default (response = {}) => {
	return new DangerSource(
		response.data && response.data.length ? response.data.map(el => {
			return new RegionData(
				el.key,
				el.value
			)
		}) : [],
		response.legend = []
	)
}