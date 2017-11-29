<template>
  <div class="order-step step1">
    <order-title :proTitle="title"></order-title>
    <type-selector-list/>
    <el-button type="primary">下一步</el-button>
  </div>
</template>

<script>
  import OrderTitle from './OrderTitle'
  import TypeSelectorList from './TypeSelectorList'

  export default {
    name: 'OrderStep1',
    components: {
      'order-title': OrderTitle,
      'type-selector-list': TypeSelectorList
    },
    data () {
      return {
        title: '第一步: 项目类型'
      }
    }
  }
</script>
