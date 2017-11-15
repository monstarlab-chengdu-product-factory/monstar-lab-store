<template>
  <div class="product-con">
    <index-commercial/>
    <p class="title">业务一览</p>
    <product-list/>
  </div>
</template>

<script>
  import Commercial from './Commercial'
  import ProductList from './ProductList'
  export default {
    name: 'Product',
    components: {
      ProductList,
      'index-commercial': Commercial,
      'product-list': ProductList
    }
  }
</script>
<style lang="scss" scoped>
  .title{
    text-align: center;
    height: 50px;
    line-height: 50px
  }
</style>
