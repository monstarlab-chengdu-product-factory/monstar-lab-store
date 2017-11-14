import Vue from 'vue'
import App from './App'
import router from './router'
import $http from 'vue-resource'
// global
import Element from 'element-ui'
import '../element-variables.scss'
Vue.use(Element, { size: 'medium' })

Vue.config.productionTip = false
Vue.use($http)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
  // render: h => h(App)
})
