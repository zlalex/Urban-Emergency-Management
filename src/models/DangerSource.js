import RegionData from '@/models/RegionData'

export default class {
	constructor(data = [
		new RegionData('松江区', 1548),
		new RegionData('嘉定区', 535),
		new RegionData('宝山区', 510),
		new RegionData('闵行区', 634),
		new RegionData('杨浦区', 735),
	], legend = [
		'杨浦区',
		'闵行区',
		'宝山区',
		'嘉定区',
		'松江区'
	]) {
		this.data = data
		this.legend = legend
	}
}