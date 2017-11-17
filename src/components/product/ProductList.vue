<template>
  <div class="product-list">
    <div class="product-type-tab">
      <product-type-tab></product-type-tab>
    </div>
    <div class="product-module">
    </div>
  </div>
</template>

<script>
  import ProductTypeTab from './ProductTypeTab'
  export default {
    name: 'ProductList',
    components: {
      'product-type-tab': ProductTypeTab
    },
    props: [],
    data () {
      return {
      }
    }
  }
</script>

<style>
</style>