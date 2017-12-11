<template>
  <ul>
    <li class="function-property">
      <el-button class="button-father">{{property}}</el-button>
      <el-button class="button-child">{{propertyItems}}</el-button>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'PropertyItem',
    props: {
      property: {},
      propertyItems: {}
    },
    data () {
      return {
      }
    }
  }
</script>
<style lang='scss' scoped>

</style>
