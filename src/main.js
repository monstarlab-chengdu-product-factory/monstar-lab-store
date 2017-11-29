import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {
  Button,
  Select,
  Row,
  Col
} from 'element-ui'
import '../customize.scss'
import './assets/stylesheet/style.scss'

Vue.prototype.$ELEMENT = {size: 'medium'}
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
