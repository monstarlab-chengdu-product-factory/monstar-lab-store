<template>
  <div class="good-con">
    <index-commercial/>
    <good-list/>
  </div>
</template>

<script>
  import Commercial from './Commercial'
  import GoodList from './GoodList.vue'
  export default {
    name: 'good',
    components: {
      'index-commercial': Commercial,
      'good-list': GoodList
    }
  }
</script>
