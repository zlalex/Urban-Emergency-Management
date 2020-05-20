const _import_ = require('./_import_' + process.env.NODE_ENV + '.js')
const datum = _import_('datum')
const event = _import_('event')
const index = _import_('index')
const login = _import_('login')
const empty = _import_('empty')
const datumAutomobile = _import_('datum-automobile')
const datumCompany = _import_('datum-company')
const datumCargo = _import_('datum-cargo')

export default {
	event,
	index,
	login,
	datum,
	empty,
	datumAutomobile,
	datumCompany,
	datumCargo
}