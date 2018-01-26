<template>
  <h1>{{name}}</h1>
</template>
<script>
  export default {
    name: 'ProductTitle',
    props: ['name']
  }
</script>
<style lang='scss' scoped>
  h1 {
    letter-spacing: 1px;
  }
</style>
