// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
// import '../element-variables.scss'
import '../theme/index.css'




import router from './router'

Vue.config.productionTip = false
Vue.use(Element, { size: 'medium' })


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
