<template>
  <div class="product-type-tab">
    <div class="cat-selector">
      <cat-selector-group :proButtonList="productTypes" :proSingleSelected="true" @anySelectorSelected="getSubTypes"></cat-selector-group>
    </div>
    <div class="type-selector">
      <type-selector-group :proButtonList="subTypes" :proSingleSelected="true"></type-selector-group>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../../assets/stylesheet/components_import";

  .product-type-tab {
    padding-top: rem(10px);
  }

  .cat-selector {
    .selector-button {
      &.selected {
        &:after {
          display: none;
        }
      }
    }
    + .type-selector {
      margin-top: rem(10px);
    }
  }
</style>

<script>
  import { ProductTypesService } from './ProductTypes.service.js'
  import SelectorButtonGroup from '../common/SelectorButtonGroup'
  import SubGroup from '../product/SubGroup'
  export default {
    name: 'ProductTypeTab',
    components: {
      'cat-selector-group': SelectorButtonGroup,
      'type-selector-group': SubGroup
    },
    props: {},
    data () {
      return {
        productTypes: [{}],
        subTypes: [{}]
      }
    },
    created () {
      let service = new ProductTypesService()
      service.getProductTypes()
        .then(data => {
          this.productTypes = data
          if (data.length > 0) {
            this.subTypes = data[0].functions
          }
        })
    },
    methods: {
      getSubTypes: function (typeData) {
        this.subTypes = this.productTypes[typeData.index].functions
      }
    }
  }
</script>
