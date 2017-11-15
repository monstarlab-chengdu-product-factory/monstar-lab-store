<template>
  <section>
  <el-row class="item-container" >
    <el-col  :span="20" :offset="2" class="product-list" v-for="prodcut in products" :key="prodcut.id" >
      <div class="img-container">
        <img v-bind:src="prodcut.icon" alt="thumbnail">
      </div>
      <div class="description-container">
        <h1>{{prodcut.name}}</h1>
        <h2>{{prodcut.brief}}</h2>
        <p>{{prodcut.discription}}</p>
      </div>
    </el-col>
  </el-row>
  </section>
</template>
<script>
  import { Products } from './Product.service.js'
  export default {
    name: 'productList',
    data: function () {
      return {
        products: {}
      }
    },
    created () {
      let product = new Products()
      product.getproducts(this)
        .then(data => {
          this.products = data
        })
    .catch(console.log('product ERROR'))
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../assets/stylesheet/variable";
  .item-container{
    flex-direction: column;

  }
  .description-container{
  h1,h2{
    color:map-get($global-color, d);
  }
    h2{
      margin: 10px 0;
    }
    p{
      color:map-get($global-color, g) ;
    }
  }
  .product-list{
    display: flex;
    padding: 40px 0;
    justify-content: center;
    overflow: hidden;
    border-top:1px solid map-get($global-color, borderColor)  ;
  }
  .img-container{
    width:300px;
    min-width: 300px;
    height: 200px;
    max-height: 200px;
    margin-right: 40px;
    border-radius: 4px;
    img{
      width: 100%;
    }
  }

</style>
