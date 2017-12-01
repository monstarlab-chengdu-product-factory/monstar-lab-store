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
    name: 'PropertyItem',
    props: {
      property: {},
      propertyItems: {}
    },
    data () {
      return {
        properties: this.property,
        items: this.propertyItems
      }
    }
  }
</script>
<style lang='scss' scoped>

</style>
