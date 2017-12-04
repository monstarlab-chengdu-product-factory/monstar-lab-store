<template>
  <div class="product-container">
    <product-name name="第一步:项目类型"></product-name>
    <div class="product-type">
      <type-list v-on:checkbox="getChecked"></type-list>
    </div>
    <div class="next-button" >
      <el-button type="primary" plain @click="next" >下一步</el-button>
    </div>
  </div>
</template>

<script>
  import ProductName from './ProductName.vue'
  import ProductTypeList from './ProductTypeList.vue'
//  import bus from './ProductItem.vue'
  export default {
    name: 'Product',
    components: {
      'product-name': ProductName,
      'type-list': ProductTypeList
    },
    data: function () {
      return {
        id: ''
      }
    },
    methods: {
      getChecked (checkboxes) {
        this.id = checkboxes
        console.log(this.id)
      },
      next () {
        this.$router.push({name: 'productList', params: {id: this.id}})
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/stylesheet/variable";
  .product-container {
    margin: 60px auto;
    width: map-get($global-width, a)
  }
  .product-type{
    margin-top: 20px;
  }
  .next-button{
    margin-top: 60px;
    width: 100%;
    text-align: center;
  }
  .el-button{
    width: 300px;
    height: 50px;
    font-size: 18px;
    font-weight:300;
  }
</style>
