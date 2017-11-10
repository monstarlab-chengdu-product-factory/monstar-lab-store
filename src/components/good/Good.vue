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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
