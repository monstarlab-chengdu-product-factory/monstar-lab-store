<template>
  <div>
    <commercial/>
    <commercial-list/>
  </div>
</template>

<script>
  import Commercial from './Commercial'
  import List from './List'
  export default {
    name: 'Marketing',
    components: {
      Commercial,
      'commercial-list': List
    }
  }
</script>
