<template>
  <div class="product-type-tab">
    <div class="cat-selector">
      <cat-selector-group></cat-selector-group>
    </div>
    <div class="type-selector">
      <type-selector-group></type-selector-group>
    </div>
  </div>
</template>

<script>
  import SelectorButtonGroup from './SelectorButtonGroup'
  export default {
    name: 'ProductTypeTab',
    components: {
      'cat-selector-group': SelectorButtonGroup,
      'type-selector-group': SelectorButtonGroup
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