const _toString = Object.prototype.toString
const _typeof = type => data => _toString.call(data).slice(8, -1) === type

export default {
  isNumber: _typeof('Number'),
  isString: _typeof('String'),
  isObject: _typeof('Object'),
  isArray: _typeof('Array'),
  isDate: _typeof('Date'),
  isFunction: _typeof('Function'),
  notBasic: data => typeof data === 'object' && data === null
}
