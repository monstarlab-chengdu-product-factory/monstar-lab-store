import Vue from 'vue'
import Router from 'vue-router'
import Good from '@/components/good/Good'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GoodList',
      component: Good
    }
    // {
    //   path: '*',
    //   component: NotFoundComponent
    // }
  ]
})
