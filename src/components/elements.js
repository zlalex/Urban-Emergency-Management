import {
  Avatar,
  Form,
  FormItem,
  Input,
  Button,
  Message,
  MessageBox,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Timeline,
  TimelineItem,
  Steps,
  Step,
} from 'element-ui'

const components = [
  Avatar,
  Form,
  FormItem,
  Input,
  Button,
  Message,
  MessageBox,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Timeline,
  TimelineItem,
  Steps,
  Step,
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