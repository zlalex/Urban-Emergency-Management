import map from './map.vue'
import indexSection from './index-section.vue'
import indexEchartsTpl from './index-echarts-tpl.vue'

const compontents = [
	map,
	indexSection,
	indexEchartsTpl
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
