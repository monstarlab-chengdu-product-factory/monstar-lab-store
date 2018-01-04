<template>
  <div class="item">
    <input type="checkbox" :id="type.id" :value="type.id" @click="addToCart" >
    <label v-bind:for="type.id">
      <img v-bind:src='type.icon' alt='icon'>
      <div class="description-container"><h1>{{type.name}}</h1>
        <p>{{type.brief}}</p></div>
    </label>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'ProductItem',
    props: ['type'],
    data: function () {
      return {
        types: {}
      }
    },
    computed: {
//      ...mapActions({
//        addToCart: 'addToCart'
//      })
    },
    methods: {
      ...mapActions({
        addToCart: 'addToCart'
      }),
      click (typeId, event) {
        let checked = event.target.checked
        this.$emit('checkbox', checked, typeId)
      }
    }
  }
  </script>
<style lang='scss' scoped>
  .item{
    height: 100%;
    position: relative;
    width: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  input:checked+label{
    border: 2px solid red;
  }
  input[type='checkbox']{
    opacity: 0;
    width: 100%;
    margin: 0;
    position: absolute;
    top:0;
    right: 0;
    height: 100%;
  }
  label{
    position: absolute;
    top:0;
    width: 100%;
    height: 100%;
    right: 0;
  }
  .description-container{
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    text-align: center;
  }

</style>
