<template>
  <div class="product-type-tab">
    <div class="cat-selector">
      <cat-selector-group :buttonList="productTypes"></cat-selector-group>
    </div>
    <div class="type-selector">
      <type-selector-group></type-selector-group>
    </div>
  </div>
</template>

<script>
  import { ProductTypesService } from './ProductTypes.service.js'
  import SelectorButtonGroup from '../common/SelectorButtonGroup'
  export default {
    name: 'ProductTypeTab',
    components: {
      'cat-selector-group': SelectorButtonGroup,
      'type-selector-group': SelectorButtonGroup
    },
    props: [],
    data () {
      return {
        productTypes: [{}]
      }
    },
    created () {
      let service = new ProductTypesService()
      service.getProductTypes()
        .then(data => {
          this.productTypes = data
        })
    }
  }
</script>

<style>
</style>
