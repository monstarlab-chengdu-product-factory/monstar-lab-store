<template>
  <div class="container">
    <product-title name="第一步:项目类型"/>
    <section class="type-list">
      <div class="type-item" v-for="(type, index) in types" :key="type.id">
        <checkbox-item class="image-checkbox" :item="type"/>
      </div>
    </section>
    <next-button :path="path"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ProductTitle from '../common/ProductTitle.vue'
  import NextButton from './NextButton.vue'
  import CheckboxItem from './CheckboxItem.vue'

  export default {
    name: 'ProductTypes',
    data () {
      return {
        path: 'products/list'
      }
    },
    components: {
      ProductTitle,
      NextButton,
      CheckboxItem
    },
    computed: mapGetters({
      types: 'allProductTypes'
    }),
    created () {
      this.$store.dispatch('getAllProductTypes')
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheet/variable";

  .type-list {
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
  }

  .type-item {
    width: 33.33%;
    padding: 30px 15px 0 15px;
  }

  button {
    display: block;
    margin: 2em auto;
  }
</style>
