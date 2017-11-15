<template>
  <section>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{error}}
    </div>
    <div v-if="item" class="product-detail">
      here is detail id:{{ $route.params.id }}
      {{item}}
    </div>
  </section>
</template>

<script>
  export default {
    name: 'productDetail',
    data () {
      return {
        loading: false,
        error: null,
        item: null
      }
    },
    created () {
//      this.fetchData()
//        .catch(console.error('vue error'))
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.error = this.item = null
        this.loading = true
      }
    }
  }
</script>

<style>

</style>
