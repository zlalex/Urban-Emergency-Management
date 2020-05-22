import ReportData from '@/models/ReportData'

export default class {
	constructor(data = [
		new ReportData(
			'2020-3-2',
			'10时21分，合庆地区周祝公路琥珀路口，发生天燃气泄漏，无人员伤亡。'
		),
		new ReportData(
			'2020-3-2',
			'14时35分，捷兴路211号中外运普菲斯冷链物流有限公司，断电致机房压缩机阀门无法完全关闭，引发压缩机管道液氨泄漏。'
		),
		new ReportData(
			'2020-3-4',
			'合庆镇汇庆路888号一工厂内氯气泄漏，经消防现场处置，现氯气管道开关已关闭，无人员伤亡。'
		),
	]) {
		this.data = data
	}
}