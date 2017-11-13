<template>
  <nav class="app-nav">
    <div class="board-con">board</div>
    <div>
      <router-link v-for="nav in navs" :key="nav.id" :to="nav.linkUrl">{{nav.name}}</router-link>
    </div>
  </nav>
</template>

<script>
  import Navs from './nav.mock.js'
  export default {
    name: 'AppNav',
    data: function () {
      return {
        navs: Navs
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
