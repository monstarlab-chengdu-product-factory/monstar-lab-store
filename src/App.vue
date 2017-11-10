<template>
  <div id="app">
    <app-nav/>
    <router-view/>
    <app-footer/>
    <!--<app-footer></app-footer>-->
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
