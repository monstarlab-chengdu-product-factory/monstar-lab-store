<template>
 <h1>{{name}}</h1>
</template>
<script>
  export default {
    name: 'ProductName',
    props: ['name']
  }
</script>
<style lang='scss' scoped>
h1{
  font-size: 36px;
  letter-spacing: 1px;
  font-weight:400;
}
</style>
