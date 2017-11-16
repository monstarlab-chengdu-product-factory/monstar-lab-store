<template>
  <div>
    <index-commercial/>
    <index-list/>
  </div>
</template>

<script>
  import Commercial from './Commercial'
  import List from './List'
  export default {
    name: 'Marketing',
    components: {
      'index-commercial': Commercial,
      'index-list': List
    }
  }
</script>
