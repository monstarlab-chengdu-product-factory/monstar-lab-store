<template>
  <div class="product-list">
    <ms-order-title :proTitle="title"></ms-order-title>
    <ms-product-type-tab></ms-product-type-tab>
    <el-row class="model-title" :gutter="20">
      <el-col v-for="item in table" :span="3">{{item.name}}</el-col>
      <el-button class="all">全选</el-button>
    </el-row>
    <ms-type-product-list :proButtonList="products" :proHideCheckbox="true" :proSize="'medium'"></ms-type-product-list>
    <div class="product-module">
    </div>
  </div>
</template>
<script>
  import OrderTitle from '../order/OrderTitle'
  import ProductTypeTab from './ProductTypeTab'
  import CheckButtonGroup from '../common/CheckButtonGroup'
  import { ProductService } from './Product.service.js'
  export default {
    name: 'ProductList',
    components: {
      'ms-product-type-tab': ProductTypeTab,
      'ms-order-title': OrderTitle,
      'ms-type-product-list': CheckButtonGroup
    },
    props: [],
    data () {
      return {
        title: '第二步: 功能评估',
        products: [{}],
        table: [
          {'name': '模块'},
          {'name': '机能'}
        ]
      }
    },
    created () {
      let service = new ProductService()
      service.getProducts()
        .then(data => {
          this.products = data
        })
    }
  }
</script>

<style lang="scss">
  @import "../../assets/stylesheet/components_import";
  @import "../../assets/stylesheet/_variable.scss";

  .product-list {
    width: rem(1200px);
    margin: 0 auto;
  }
  .model-title{
    width: 100%;
    height: 4rem;
    font-size: 16px;
    border: solid 1px map_get($global-color-base,c);
    position: relative;
    background-color: #f8f8f8;
    .el-col{
      text-align: center;
      line-height: 48px;
      &:nth-child(1){
        border-right: 1px solid map_get($global-color-base,c);
       }
    }
  }
  .all{
    position: absolute;
    right: 1rem;
    top:.5rem;
    width: 84px;
    height: 34px;
    border-radius: 4px;
    color: map_get($global-color-base,primary);
    background-color: #ffffff;
    border: solid 1px map_get($global-color-base,c);
  }
</style>
