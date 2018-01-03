<template>
  <nav class="app-nav">
    <div class="wrapper">
      <router-link to="/products" class="board-con">
        <img src="../../assets/image/logo-white.svg" alt="MonstarLab">
      </router-link>

      <el-menu class="list-con" mode="horizontal">
        <el-menu-item v-for="item in items" :key="item.id" index="item.id" class="list-item">
          <router-link :to="item.url">{{item.name}}</router-link>
        </el-menu-item>
      </el-menu>
    </div>
  </nav>
</template>

<script>
  import { Menu, MenuItem } from 'element-ui'
  import service from '../../api/navs'

  export default {
    name: 'AppNav',
    data () {
      return {
        items: {}
      }
    },
    components: {
      elMenu: Menu,
      elMenuItem: MenuItem
    },
    created () {
      service.getNavs(data =>
        (this.items = data))
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
    background-color: map-get($global-color-base, primary);
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: map-get($global-width, break-point-lg);
      margin: 0 auto;
      padding: 0 map-get($global-padding, a);
    }
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

  .el-menu--horizontal .el-menu-item:hover, .el-menu--horizontal .el-menu-item:focus {
    background-color: transparent;
  }
</style>
