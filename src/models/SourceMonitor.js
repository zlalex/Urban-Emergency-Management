import SourceData from '@/models/SourceData'

export default class {
  constructor(axis = ["生产装置", "罐区", "仓库"]){
    this.axis = axis
    this.data = [
      new SourceData([5, 15, 20]),
      new SourceData([10, 45, 140]),
      new SourceData([20, 80, 180]),
      new SourceData([15, 80, 185]),
    ]
  }
}