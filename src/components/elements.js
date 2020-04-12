import {
	Message,
	MessageBox,
	Table,
	TableColumn,
	Timeline,
	TimelineItem,
	Step,
	Steps,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	Avatar,
	Dialog
} from 'element-ui'

const compontents = [
	Message,
	MessageBox,
	Table,
	TableColumn,
	Timeline,
	TimelineItem,
	Step,
	Steps,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	Avatar,
	Dialog
]

const install = Vue => {
	if (install.installed) {
		return
	}

	compontents.map(element => Vue.component(element.name, element))
}

typeof window !== 'undefined' && window.Vue && install(window.Vue)

export default {
	install,
	Message,
	MessageBox,
}
