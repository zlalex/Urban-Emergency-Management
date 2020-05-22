import {
  Form,
  FormItem,
  Input,
  Button,
  Message,
  MessageBox
} from 'element-ui'

const components = [
  Form,
  FormItem,
  Input,
  Button,
  Message,
  MessageBox
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
  Message,
  MessageBox,
}