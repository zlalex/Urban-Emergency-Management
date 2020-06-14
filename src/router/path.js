const NODE_ENV = process.env.NODE_ENV || 'production'
const _import_ = require('@/router/_import_' + NODE_ENV + '.js')
const dispose = _import_('dispose')
const index = _import_('index')
const register = _import_('register')
const login = _import_('login')
const library = _import_('library')
const empty = _import_('empty')
const libraryChemical = _import_('library/chemical')
const libraryCompany = _import_('library/company')
const libraryFactory = _import_('library/factory')
const libraryVehicle = _import_('library/vehicle')

export default {
  dispose,
  index,
  register,
  login,
  library,
  empty,
  libraryChemical,
  libraryCompany,
  libraryFactory,
  libraryVehicle
}