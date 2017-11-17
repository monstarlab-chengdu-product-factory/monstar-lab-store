import Vue from 'vue'
import App from './App'
import router from './router'
import $http from 'vue-resource'

import {
  Button,
  Select,
  Row,
  Col,
  Menu,
  MenuItem
} from 'element-ui'
import '../customize.scss'
import './assets/stylesheet/style.scss'

Vue.prototype.$ELEMENT = {size: 'medium'}
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)

Vue.config.productionTip = false
Vue.use($http)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
