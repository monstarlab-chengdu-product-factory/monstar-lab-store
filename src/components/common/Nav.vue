<template>
  <nav class="app-nav">
    <div class="board-con">board</div>
    <div>
      <router-link v-for="item in items" :key="item.id" :to="item.linkUrl">{{item.name}}</router-link>
    </div>
  </nav>
</template>

<script>
  import Navs from './nav.mock.js'
  export default {
    name: 'AppNav',
    data: function () {
      return {
        items: Navs
      }
    }
  }
</script>

<style lang="scss">
  .app-nav{
    .router-link-active{
      background-color: #888;
    }
    .router-link-exact-active{
      background: #333;
    }
  }
</style>
