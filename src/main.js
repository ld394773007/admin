import Vue from 'vue'
import App from './App'
import iView from 'iview'
import {
  Icon,
  Input,
  Pagination,
  Popover,
  Dialog,
  Form,
  FormItem,
  Tree,
  Button,
  Checkbox,
  CheckboxGroup,
  Select,
  Option,
  Table,
  TableColumn,
  DatePicker,
  Card,
  Tabs,
  TabPane
} from 'element-ui'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css'
import router from './router'

// Vue.use(ElementUI);
Vue.use(iView)
Vue.use(Input)
  .use(Tabs)
  .use(CheckboxGroup)
  .use(TabPane)
  .use(Card)
  .use(Tree)
  .use(Icon)
  .use(Form)
  .use(Dialog)
  .use(FormItem)
  .use(Button)
  .use(Checkbox)
  .use(Select)
  .use(Option)
  .use(Table)
  .use(TableColumn)
  .use(DatePicker)
  .use(Tree)
  .use(Pagination)
  .use(Popover)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
