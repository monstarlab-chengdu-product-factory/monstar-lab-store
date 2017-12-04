<template>
  <div class="product-type-tab">
    <div class="cat-selector">
      <cat-selector-group :proButtonList="productTypes" :proSingleSelected="true" @anySelectorSelected="getSubTypes"></cat-selector-group>
      <el-button class="change" plain type="primary" @click="change">{{alternative?'保存':'修改平台'}}</el-button>
      <div class="alternative" v-if="alternative">
        <cat-selector-group :proButtonList="productTypes" :proSingleSelected="true" @anySelectorSelected="getSubTypes"></cat-selector-group>
      </div>
    </div>
    <div class="type-selector">
      <type-selector-group :proButtonList="subTypes" :proSingleSelected="true"></type-selector-group>
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
//  import Vue from 'vue'
//  import {
//    Button
//  } from 'element-ui'
//  Vue.use(Button)
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
          if (data.length > 0) {
            this.subTypes = data[0].functions
          }
        })
    },
    methods: {
      getSubTypes: function (typeData) {
        this.subTypes = this.productTypes[typeData.index].functions
      },
      change () {
        console.log('click')
        this.alternative = !this.alternative
      }
    }

  }
</script>
