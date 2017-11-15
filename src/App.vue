<template>
  <div id="app">
    <app-nav/>
    <div class="app-main">
      <router-view/>
    </div>
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
