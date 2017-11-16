<template>
  <div class="product-container">
    <product-name name="第一步:项目类型"></product-name>
    <div class="product-type">
      <type-list></type-list>
    </div>
    <div class="next-button">
      <next-button></next-button>
    </div>

  </div>
</template>

<script>
  import ProductName from './ProductName.vue'
  import ProductNextButton from './ProductNextButton.vue'
  import ProductTypeList from './ProductTypeList.vue'
  export default {
    name: 'Product',
    components: {
      'product-name': ProductName,
      'type-list': ProductTypeList,
      'next-button': ProductNextButton
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


</style>
