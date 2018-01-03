<template>
  <div class="app">
    <app-nav/>
    <div class="app-main">
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>

<script>
  import AppNav from './components/common/Nav'
  import AppFooter from './components/common/Footer'
  export default {
    name: 'app',
    components: {
      AppNav,
      AppFooter
    }
  }
</script>

<style lang="scss" scoped>
  @import "./assets/stylesheet/_variable.scss";

  .app {
    width: 100%;
    height: 100%;
  }

  .app-main {
    min-height: 100%;
    padding-top: map-get($nav-height, a);
  }
</style>
