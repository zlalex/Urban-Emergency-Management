import RadioButton from './radio-button'
import BasicButton from './basic-button'

const components = [
  RadioButton,
  BasicButton
]

const install = Vue => {
  if (install.installed) {
    return
  }

  components.map(element => Vue.component(element.name, element))
}

typeof window !== 'undefined' && window.Vue && install(window.Vue)

export default {
  install,
}
