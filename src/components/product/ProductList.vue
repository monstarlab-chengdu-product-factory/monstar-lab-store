<template>
  <div class="product-list">
    <order-title :proTitle="title"></order-title>
    <product-type-tab ></product-type-tab>
    <el-row class="model-title" :gutter="20">
      <el-col v-for="item in table" :span="3" :key="item.id">{{item.name}}</el-col>
      <el-button class="all">全选</el-button>
    </el-row>
    <type-product-list :proButtonList="property" :proHideCheckbox="true" :proSize="'big'" v-on:typeID="getTypeId()"></type-product-list>
    <div class="next-button">
      <el-button type="primary" plain  class="function-next">下一步</el-button>
      <router-link to="/">跳过其他功能进入下一平台</router-link>
    </div>
  </div>
</template>
<script>
  import OrderTitle from '../order/OrderTitle'
  import ProductTypeTab from './ProductTypeTab'
  import CheckButtonGroup from '../common/CheckButtonGroup'
  import { ProductService } from './Product.service.js'
  import Products from '../../api/property.js'
  export default {
    name: 'ProductList',
    components: {
      'product-type-tab': ProductTypeTab,
      'order-title': OrderTitle,
      'type-product-list': CheckButtonGroup
    },
    props: [],
    data () {
      return {
        title: '第二步: 功能评估',
        products: [{}],
        property: {
        },
        table: [
          {'name': '模块'},
          {'name': '机能'}
        ]
      }
    },
    created () {
      let productService = new ProductService()
      productService.getProducts()
        .then(data => {
          this.products = data
        })
      Products.getProperties(properties => {
        this.property = properties
      })
    },
    methods: {
      getTypeId (value) {
        this.property = Products.getPropertiesByFunctionId(value)
        console.log(this.property)
      }
    }
//    computed: {
//      ids: function () {
//        return this.$route.query.id.map(function (value) {
//          return Number(value)
//        })
//      }
//    },
//    mounted () {
//      console.log(this.$route.params.id)
//      console.log(this.$route.query.id)
//    }
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
  .next-button{
    margin: 60px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  a{
    display: block;
    width: 300px;
    text-align: center;
    line-height: 2;
    color:map_get($global-color-base,f);
  &:hover{
     text-decoration: underline;
   }
  }
  }
  .function-next{
    width: 300px;
    height: 50px;
    font-size: 18px;
    font-weight:300;
  }

</style>
