import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/common/NotFound'
import Marketing from '@/components/marketing/Marketing'
import Product from '@/components/product/Product'
import ProductList from '@/components/product/ProductList'
import OrderStep1 from '@/components/order/OrderStep1'
// const Order = () => import(/* webpackChunkName: "group-order" */ '@/components/order/Order')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/products', name: 'products', component: Product},
    {path: '/order', name: 'order', component: OrderStep1},
    {path: '/productList', name: 'productList', component: ProductList},
    {path: '', name: 'marketing', component: Marketing},
    {path: '*', component: NotFound}
  ]
})
