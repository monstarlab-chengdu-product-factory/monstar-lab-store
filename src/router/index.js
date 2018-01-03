import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/common/NotFound'

import Marketing from '@/components/marketing/Marketing'

import Product from '@/components/product/Product'
import ProductTypes from '@/components/product/ProductTypes'
import ProductList from '@/components/product/ProductList'

// lazy load order module
const Order = () => import(/* webpackChunkName: "group-order" */'@/components/order/Order')
const OrderConfirm = () => import(/* webpackChunkName: "group-order" */'@/components/order/OrderConfirm')
const OrderList = () => import(/* webpackChunkName: "group-order" */'@/components/order/OrderList')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/products',
      component: Product,
      children: [
        {
          path: 'list',
          name: 'pdList',
          component: ProductList
        },
        {
          path: '/',
          name: 'pdTypes',
          component: ProductTypes
        }
      ]
    },
    {
      path: '/orders',
      component: Order,
      children: [
        {
          path: 'confirm',
          name: 'orderConfirm',
          component: OrderConfirm
        },
        {
          path: '',
          name: 'orderList',
          component: OrderList
        }
      ]
    },
    {path: '', name: 'marketing', component: Marketing},
    {path: '*', component: NotFound}
  ]
})
