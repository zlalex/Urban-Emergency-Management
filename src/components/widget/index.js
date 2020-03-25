import map from './map.vue'
import layerSection from './layer-section.vue'

const compontents = [
	map,
	layerSection
]

const install = Vue => {
	if (install.installed) {
		return
	}

	compontents.map(element => Vue.component(element.name, element))
}

typeof window !== 'undefined' && window.Vue && install(window.Vue)

export default {
	install
}
