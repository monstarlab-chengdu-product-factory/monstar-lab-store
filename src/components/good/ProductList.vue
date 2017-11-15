<template>
  <ul>
    <li class="product-list" v-for="prodcut in products">
      <img v-bind:src="prodcut.icon" alt="thumbnail">
      <el-container>
        <h1>{{prodcut.name}}</h1>
        <h2>{{prodcut.brief}}</h2>
        <p>{{prodcut.discription}}</p>
      </el-container>
    </li>
  </ul>
</template>
<script>
  import {getProductList} from './Good.service.js'
  export default {
    name: 'productList',
    data:function () {
      return{
        products:{}
      }
    },
    created(){
      getProductList(this)
      .then(data => {
        this.products = data
      })
      .catch (console.log('product ERROR'))
    }
  }
</script>

<style lang="scss"scoped>

</style>
