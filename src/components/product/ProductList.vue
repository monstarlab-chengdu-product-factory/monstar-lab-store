<template>
  <div class="container-fluid">
    <div class="wrapper">
      <product-title name="第二步:功能评估"></product-title>
      <list-tabs/>
    </div>

    <div class="bg-grey">
      <modules-points/>
      <next-button :path="path"/>
      <router-link :to="path" class="link-item">跳过其他功能进入下一平台</router-link>
    </div>
  </div>
</template>

<script>
//  import {mapGetters, mapMutations} from 'vuex'
  import ProductTitle from '../common/ProductTitle.vue'
  import ListTabs from './ListTabs.vue'
  import ModulesPoints from './ModulesPoints.vue'
  import NextButton from './NextButton.vue'

  export default {
    name: 'ProductList',
    components: {
      ProductTitle,
      ListTabs,
      ModulesPoints,
      NextButton
    },
    data () {
      return {
        path: '/orders/confirm'
      }
    },
    created () {
      this.$store.dispatch('getAllProductTypes')
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheet/_variable.scss";

  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .bg-grey {
    width: 100%;
    min-height: 50vh;
    background-color: map-get($global-color-base, j);
  }

  .link-item {
    display: block;
    text-align: center;
    color: map-get($global-color-base, f);
    font-size: 16px;
    padding-bottom: 6em;
  }
</style>
