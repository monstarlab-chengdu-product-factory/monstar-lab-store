<template>
  <div id="app">
    <app-nav/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
  import AppNav from './components/common/nav'
  import AppFooter from './components/common/Footer'
  export default {
    name: 'app',
    components: {
      AppFooter,
      'app-nav': AppNav,
      'app-footer': AppFooter
    }
  }
</script>

<style>
</style>
