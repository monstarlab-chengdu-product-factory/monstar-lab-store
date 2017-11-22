<template>
  <router-view/>
</template>
<script>
  import { table, tableColumn } from 'element-ui'
  import OrderDetail from './OrderDetail'
  export default {
    name: 'Order',
    data () {
      return {}
    },
    components: {
      OrderDetail,
      elTable: table,
      elTableColumn: tableColumn
    }
  }
</script>
