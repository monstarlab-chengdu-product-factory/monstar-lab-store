<template>
  <div class="product-list">
    <order-title :proTitle="title"></order-title>
    <product-type-tab></product-type-tab>
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
  export default {
    name: 'ProductList',
    components: {
      'product-type-tab': ProductTypeTab,
      'order-title': OrderTitle
    },
    props: [],
    data () {
      return {
        title: '第二步: 功能评估'
      }
    }
  }
</script>

<style>
</style>