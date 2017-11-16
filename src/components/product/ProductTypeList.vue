<template>
    <ul class="type-container">
      <li v-for="type in types" :key="type.id" class="type-item">
        <img v-bind:src="type.icon" alt="icon">
        <div class="description-container"><h1>{{type.name}}</h1>
          <p>{{type.brief}}</p></div>
      </li>
    </ul>
</template>

<script>
  import {ProductService} from '../product/Product.service.js'
  export default {
    name: 'ProductTypeList',
    data: function () {
      return {
        types: {}
      }
    },
    created () {
      let service = new ProductService()
      service.getProducts(this)
        .then(data => {
          this.types = data
        })
    }
  }
</script>
<style lang="scss" scoped>
.type-item{
  width: 46%;
  margin: 20px;
  position: relative;
  overflow:hidden;
  height: 200px;

  img{
    width: 100%;
    border-radius: 4px;
  }
.description-container{
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;

}
}
.type-container{
  width: 100%;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
}
</style>
