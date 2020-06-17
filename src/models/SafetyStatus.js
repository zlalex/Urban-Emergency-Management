import LevelData from '@/models/LevelData'

export default class {
  constructor(level = [
    new LevelData('一级', '5'),
    new LevelData('二级', '10'),
    new LevelData('三级', '40'),
    new LevelData('四级', '45'),
  ]) {
    this.data = level
  }
}