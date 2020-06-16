export default class FactoryData {
  constructor(xAxis = [
    '浦东新区',
    '宝山区',
    '嘉定区',
    '闵行区',
    '松江区',
    '青浦区',
    '奉贤区',
    '金山区'
  ], data = [
    29,
    5,
    30,
    21,
    22,
    17,
    23,
    80
  ]) {
    this.xAxis = xAxis
    this.data = data
  }
}