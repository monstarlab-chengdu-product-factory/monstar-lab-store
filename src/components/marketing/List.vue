<template>
  <section>
    <el-row class="item-container">
      <el-col :span="20" :offset="2" class="product-list" v-for="item in items" :key="item.id">
        <div class="img-container">
          <img v-bind:src="item.icon" alt="thumbnail">
        </div>
        <div class="description-container">
          <h1>{{item.name}}</h1>
          <h2>{{item.brief}}</h2>
          <p>{{item.discription}}</p>
        </div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
  import { ProductService } from '../product/Product.service.js'
  export default {
    name: 'List',
    data: function () {
      return {
        items: {}
      }
    },
    created () {
      let service = new ProductService()
      service.getProducts(this)
        .then(data => {
          this.items = data
        })
//        .catch(console.log('product ERROR'))
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheet/variable";

  .item-container {
    flex-direction: column;
  }

  .description-container {
    h1, h2 {
      color: map-get($global-color-base, a);
    }
    h2 {
      margin: 10px 0;
    }
    p {
      color: map-get($global-color-base, c);
    }
  }

  .product-list {
    display: flex;
    padding: 40px 0;
    justify-content: center;
    overflow: hidden;
    border-top: 1px solid map-get($global-color, border);
  }

  .img-container {
    width: 300px;
    min-width: 300px;
    height: 200px;
    max-height: 200px;
    margin-right: 40px;
    border-radius: 4px;
    img {
      width: 100%;
    }
  }
</style>
