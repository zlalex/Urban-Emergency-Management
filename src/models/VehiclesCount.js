import VehicleData from '@/models/VehicleData'

export default class {
	constructor(data = [
		new VehicleData(
			'沪BG4517',
			'液氨26.3',
			'王明玉',
			'李保国',
			'上海中海物流公司'
		),
		new VehicleData(
			'沪BD2625',
			'天然气34.5',
			'吴文博',
			'张国庆',
			'上海尹鑫物流有限公司'
		),
		new VehicleData(
			'沪BG4517',
			'原油',
			'王晓峰',
			'孙大伟',
			'上海聚焦运输有限公司'
		),
		new VehicleData(
			'沪BG4517',
			'汽油',
			'赵宝发',
			'周尚文',
			'上海众宁运输有限公司'
		)
	]) {
		this.data = data
	}
}