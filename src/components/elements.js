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
  Dialog,
  Table,
  TableColumn,
  Menu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem
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
  Dialog,
  Table,
  TableColumn,
  Menu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem
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