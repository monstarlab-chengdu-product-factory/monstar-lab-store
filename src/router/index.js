import Vue from 'vue'
import Router from 'vue-router'

import Good from '@/components/good/Good'
import NotFound from '@/components/common/NotFound'
const Order = () => import('@/components/order/Order')
// import Order from '@/components/order/order'
// import User from '@/components/user/user'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', name: 'good', component: Good},
    {path: 'order', name: 'order', component: Order},
    // {path: 'user', name: 'user', component: User},
    {path: '*', component: NotFound}
  ]
})
