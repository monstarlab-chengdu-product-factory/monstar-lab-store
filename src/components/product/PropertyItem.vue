<template>
  <ul>
    <li class="function-property">
      <el-button class="button-father">{{properties}}</el-button>
      <el-button class="button-child">{{items}}</el-button>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'FunctionItem',
    props: {
      function: {},
      functionItems: {}
    },
    data () {
      return {
        properties: this.function,
        items: this.functionItems
      }
    }

  }

</script>
<style lang='scss' scoped>

</style>
