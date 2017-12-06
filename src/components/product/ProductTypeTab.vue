<template>
  <div class="product-type-tab">
    <div class="cat-selector">
      <cat-selector-group :proButtonList="productTypes" :proSingleSelected="true" ></cat-selector-group>
      <el-button class="change" plain type="primary" @click="change">{{alternative?'保存':'修改平台'}}</el-button>
      <div class="alternative" v-if="alternative">
        <cat-selector-group :proButtonList="productTypes" :proSingleSelected="true" @anySelectorSelected="getSubTypes"></cat-selector-group>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../assets/stylesheet/components_import";
  @import "../../assets/stylesheet/_variable.scss";
  .product-type-tab {
    padding-top: rem(10px);
  }
.alternative{
  margin:10px 0;
  .selector-button-group{
    li{
      width: 210px;
      height: 89px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px dashed map_get($global-color-base,c);
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
      margin-top: rem(10px);
    }
      .change{
        position: absolute;
        right: 0;
        width: 158px;
        height: 48px;
        top:0;
        font-size: 16px;
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
        subTypes: [{}],
        alternative: false
      }
    },
    created () {
      let service = new ProductTypesService()
      service.getProductTypes()
        .then(data => {
          this.productTypes = data
        })
    },
    methods: {
      change () {
        console.log('click')
        this.alternative = !this.alternative
      }
    }
  }
</script>
