import Vue from 'vue'
import App from './App'
import router from './router'
import $http from 'vue-resource'
import Element from 'element-ui'
import '../customize.scss'

Vue.config.productionTip = false

Vue.use($http)
Vue.use(Element, { size: 'medium' })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
