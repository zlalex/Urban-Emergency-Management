import LevelData from '@/models/LevelData'

export default class {
  constructor(legend = [
    '一级',
    '二级',
    '三级',
    '四级'
  ], level = [
    new LevelData('一级', '5'),
    new LevelData('二级', '10'),
    new LevelData('三级', '40'),
    new LevelData('四级', '45'),
  ]) {
    this.legend = legend
    this.data = level
  }
}