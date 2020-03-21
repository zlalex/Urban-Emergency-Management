import {
	Message,
	MessageBox,
} from 'element-ui'

const compontents = [
	Message,
	MessageBox,
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
