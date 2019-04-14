import Vue from 'vue'
import App from './App'
import iView from 'iview'
import { Input,Pagination, Form, FormItem,Tree, Button,Checkbox,Select, Option, Table, TableColumn, DatePicker } from 'element-ui'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css'
import router from './router'

// Vue.use(ElementUI);
Vue.use(iView)
Vue.use(Input)
   .use(Form)
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
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
