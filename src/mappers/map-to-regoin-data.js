import RegionData from '@/models/RegionData'

export default (response = {}) => {
	return new RegionData(
		response.key,
		response.value
	)
}