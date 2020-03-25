import RadioButton from './ue-radio-button.vue'
import icon from './ue-icon.vue'

const compontents = [
	RadioButton,
	icon
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
}
