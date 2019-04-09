import Vue from 'vue'
import App from './App'
import iView from 'iview'
import { Input, Form, FormItem, Button,Checkbox } from 'element-ui'
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
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
