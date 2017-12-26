<template>

</template>
<script>
  import {ProductService} from './Product.service.js'
  import SelectorButtonGroup from '../common/SelectorButtonGroup'
  import SubGroup from '../product/SubGroup'
  export default {
    name: 'ProductTypeTab',
    components: {
      'selector-group': SelectorButtonGroup,
      'sub-type': SubGroup
    },
    props: ['ids'],
    data () {
      return {
        productTypes: [{}],
        subTypes: [{}],
        alternative: false,
        num: 0,
        editing: false,
        property: ''
      }
    },
    computed: {
      subtitles () {
        return this.productTypes[this.num].functions
      }
    },
    created () {
      let service = new ProductService()
      service.getProducts()
        .then((data) => {
          this.productTypes = data
        })
    },
    methods: {
      change () {
        this.alternative = !this.alternative
        this.editing = !this.editing
      },
      tabChange (val) {
        this.num = val
      },
      pushItem () {
        console.log('s')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/stylesheet/variable";

  .product-type-tab {
    padding-top: 10px;
  }

  .type-selector {
    overflow-x: scroll;
  }

  .alternative {
    margin: 10px 0;
    .selector-button-group {
      li {
        width: 210px;
        height: 89px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px dashed map-get($global-color-base, c);
      }
    }
  }

  .cat-selector {
    position: relative;
    .selector-button {
      width: 150px;
      line-height: 48px;
      height: 48px;
      &.selected {
        &:after {
          display: none;
        }
      }
    }
    + .type-selector {
      margin-top: 10px;
    }
    .change {
      position: absolute;
      right: 0;
      width: 158px;
      height: 48px;
      top: 0;
      font-size: 16px;
    }
  }
</style>
