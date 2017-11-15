<template>
  <div class="good-con">
    <index-commercial/>
    <product-list/>
  </div>
</template>

<script>
  import Commercial from './Commercial'
  import ProductList from './ProductList.vue'
  export default {
    name: 'product',
    components: {
      'index-commercial': Commercial,
      'product-list': ProductList
    }
  }
</script>
