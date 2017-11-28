import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/common/NotFound'

import Marketing from '@/components/marketing/Marketing'

import ProductList from '@/components/product/ProductList'
import ProductTypeList from '@/components/product/ProductTypeList'
import Product from '@/components/product/Product'

// import OrderStep1 from '@/components/order/OrderStep1'

const Order = () => import(/* webpackChunkName: "group-order" */ '@/components/order/Order')
// const OrderConfirm = () => import(/* webpackChunkName: "group-order" */
//   '@/components/order/OrderConfirm')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/products', name: 'productList', component: ProductList},
    {path: '/product', name: 'product', component: Product},
    {path: '/productTypeList', name: 'productTypeList', component: ProductTypeList},
    {path: '/orders', name: 'order', component: Order},
    {path: '', name: 'marketing', component: Marketing},
    {path: '*', component: NotFound}
  ]
})
