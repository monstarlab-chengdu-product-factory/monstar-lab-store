import Vue from 'vue'
import Router from 'vue-router'

import Good from '@/components/good/Good'
import GoodDetail from '@/components/good/GoodDetail'
import NotFound from '@/components/common/NotFound'
const Order = () => import(/* webpackChunkName: "group-order" */ '@/components/order/Order')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/goods', name: 'good', component: Good},
    {path: '/goods/:id', name: 'good-detail', component: GoodDetail},
    {path: 'order', name: 'order', component: Order},
    // {path: 'user', name: 'user', component: User},
    {path: '', redirect: '/goods'},
    {path: '*', component: NotFound}
  ]
})
