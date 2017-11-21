<template>
  <h1>{{ title }}</h1>
</template>

<style lang="scss">
  @import "../../assets/stylesheet/components_import";
  
  h1 {
    @include font-size(36px);
    padding-top: rem(40px);
    padding-bottom: rem(40px);
  }
</style>

<script>
  export default {
    name: 'OrderTitle',
    props: ['proTitle'],
    data () {
      return {
        title: this.proTitle
      }
    }
  }
</script>
