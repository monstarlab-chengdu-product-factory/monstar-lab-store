<template>
  <div class="product-con">
    <index-commercial/>
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
      'Product-list': ProductList
    }
  }
</script>
