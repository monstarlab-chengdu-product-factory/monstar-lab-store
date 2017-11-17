<template>
  <nav class="app-nav">
    <router-link to="/products" class="board-con">
      <img src="../../assets/image/logo-white.svg" alt="MonstarLab">
    </router-link>

    <el-menu class="list-con" mode="horizontal">
      <el-menu-item v-for="item in items" :key="item.id" index="item.id" class="list-item">
        <router-link :to="item.url">{{item.title}}</router-link>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
  import { NavService } from './Nav.service.js'

  export default {
    name: 'AppNav',
    data () {
      return {
        items: {}
      }
    },
    created () {
      let service = new NavService()
      service.getNavs(this)
        .then(data => {
          this.items = data
        })
//        .catch(console.error('vue error'))
    }

  }
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheet/variable";

  .app-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: map-get($global-z-index, b);
    width: 100%;
    height: map-get($nav-height, a);
    padding: 0 map-get($global-padding, a);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: map-get($global-color-base,secondary);
  }

  .list-con {
    background-color: transparent;
    border-bottom: none;
    .list-item {
      color: #fff;
      border-bottom: none;
      &:hover {
        background-color: map-get($global-color-base, a);
      }
      a {
        display: block;
      }
    }
  }

  .el-menu--horizontal > .el-menu-item.is-active, .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border-bottom: none;
  }
</style>
