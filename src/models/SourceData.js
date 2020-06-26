export default class {
  constructor( data = [], type = 'line', stack = '总量', areaStyle = {}) {
    this.data = data
    this.type = type
    this.stack = stack
    this.areaStyle = areaStyle
  }
}