import Vue from 'vue'
import Router from 'vue-router'

import Product from '@/components/product/Product'
import ProductDetail from '@/components/product/ProductDetail'
import NotFound from '@/components/common/NotFound'
import OrderStep1 from '@/components/order/OrderStep1'

// const Order = () => import(/* webpackChunkName: "group-order" */ '@/components/order/Order')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/products', name: 'products', component: Product},
    {path: '/products/:id', name: 'product-detail', component: ProductDetail},
    {path: '/order', name: 'order', component: OrderStep1},
    // {path: 'user', name: 'user', component: User},
    {path: '', redirect: '/products'},
    {path: '*', component: NotFound}
  ]
})
