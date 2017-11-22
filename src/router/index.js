import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/common/NotFound'

import Marketing from '@/components/marketing/Marketing'

import ProductList from '@/components/product/ProductList'
// import OrderStep1 from '@/components/order/OrderStep1'

const Order = () => import(/* webpackChunkName: "group-order" */ '@/components/order/Order')
const OrderConfirm = () => import(/* webpackChunkName: "group-order" */
  '@/components/order/OrderConfirm')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/products', name: 'productList', component: ProductList},
    {
      path: '/orders',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'confirm',
          component: OrderConfirm
        },
        {
          path: '',
          redirect: '/'
        }
      ]
    },
    {path: '', name: 'marketing', component: Marketing},
    {path: '*', component: NotFound}
  ]
})
