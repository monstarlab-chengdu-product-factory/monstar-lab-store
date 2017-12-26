<template>
  <div class="container-fluid">
    <div class="bg-white">
      <product-title name="第二步:功能评估"></product-title>

      <div class="tab-con">
        <div class="type-con">
          <div class="type-item" v-for="(type, index) in types">{{type.name}}<span>30</span></div>
          <!--v-if="type.active"-->
        </div>
        <div class="change-type">
          <button>修改平台</button>
        </div>
        <div class="unit-con">
          <div class="unit-item">共功能呢</div>
          <div class="unit-item">基本能呢</div>
          <div class="unit-item">基本共功</div>
          <div class="unit-item">基本能呢</div>
          <div class="icon-add">+</div>
        </div>
      </div>

    </div>

    <div class="bg-grey">
      <modules-points/>
      <next-button :path="path"/>
      <router-link :to="path" class="link-item">跳过其他功能进入下一平台</router-link>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import ProductTitle from '../common/ProductTitle.vue'
  import ModulesPoints from './ModulesPoints.vue'
  import NextButton from '../common/NextButton.vue'

  export default {
    name: 'ProductList',
    components: {
      ProductTitle,
      ModulesPoints,
      NextButton
    },
    data () {
      return {
        path: '/orders/confirm',
        activeName: '1'
      }
    },
    created () {
      this.$store.dispatch('getAllProductTypes')
    },
    computed: mapGetters({
      types: 'allProductTypes'
    }),

    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheet/_variable.scss";

  @mixin normal-button($width, $height,$margin-right) {
    display: inline-block;
    width: $width;
    height: $height;
    border: 1px solid map-get($global-color, border);
    border-radius: 4px;
    color: map-get($global-color-base, primary);
    line-height: $height;
    text-align: center;
    font-size: 20px;
  }

  %active {
    background-color: map-get($global-color-base, primary);
    color: #fff;
  }

  .bg-white {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .tab-con {
    display: flex;
    flex-flow: wrap;
    width: 100%;
    padding-top: 30px;
  }

  .type-con {
    width: 80%;
    .type-item {
      margin-right: 15px;
      margin-bottom: 15px;
      @include normal-button(150px, 48px, 15px);
      cursor: pointer;
      span {
        padding-left: 5px;
      }
      &:hover {
        @extend %active;
      }
    }
  }

  .change-type {
    width: 20%;
    text-align: right;
    button {
      @include normal-button(auto, 48px, 0);
      padding: 0 15px;
      background-color: map-get($global-color-base, primary);
      color: #fff;
    }
  }

  .unit-con {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 20px;
    .unit-item {
      display: inline-block;
      width: 140px;
      height: 42px;
      margin-right: 10px;
      border-bottom: 4px solid map-get($global-color-base, c);
      font-size: 20px;
      color: map-get($global-color-base, k);
      line-height: 1.6;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: map-get($global-color-base, d);
        border-bottom-color: map-get($global-color, border);
      }
    }
    .icon-add {
      margin-left: 15px;
    }
  }

  .icon-add {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid map-get($global-color-base, h);
    border-radius: 2px;
    color: map-get($global-color-base, h);
    line-height: 12px;
    text-align: center;
    cursor: pointer;
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
