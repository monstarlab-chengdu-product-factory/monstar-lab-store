<template>
  <div class="product-list">
    <ms-order-title :proTitle="title"></ms-order-title>
    <ms-product-type-tab></ms-product-type-tab>
    <ms-type-product-list :proButtonList="products" :proHideCheckbox="true" :proSize="'medium'"></ms-type-product-list>
    <div class="product-module">
    </div>
  </div>
</template>

<style lang="scss">
  @import "../../assets/stylesheet/components_import";
  
  .product-list {
    width: rem(1200px);
    margin: 0 auto;
  }
</style>


<script>
  import OrderTitle from '../order/OrderTitle'
  import ProductTypeTab from './ProductTypeTab'
  import CheckButtonGroup from '../common/CheckButtonGroup'
  import { ProductService } from './Product.service.js'
  export default {
    name: 'ProductList',
    components: {
      'ms-product-type-tab': ProductTypeTab,
      'ms-order-title': OrderTitle,
      'ms-type-product-list': CheckButtonGroup
    },
    props: [],
    data () {
      return {
        title: '第二步: 功能评估',
        products: [{}]
      }
    },
    created () {
      let service = new ProductService()
      service.getProducts()
        .then(data => {
          this.products = data
        })
    }
  }
</script>

<style>
</style>