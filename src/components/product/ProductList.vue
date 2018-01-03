<template>
  <div class="container-fluid">
    <div class="bg-white">
      <product-title name="第二步:功能评估"></product-title>

      <div class="tab-con">
        <div class="type-con">
          <div class="selected-type">
            <div class="wrapper" v-if="type.active" v-for="(type, index) in types">
              <div class="type-item">{{type.name}}<span>30</span></div>
              <div class="icon-close el-icon-circle-close"  v-if="isModify"></div>
            </div>
          </div>
          <div class="hidden-type" v-if="isModify">
            <div class="wrapper" v-if="!type.active" v-for="(type, index) in types">
              <div class="type-item">{{type.name}}</div>
            </div>
          </div>
        </div>
        <div class="change-type">
          <button @click="handleModifyClick">{{isModify ? '保存' : '修改平台'}}</button>
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
  import NextButton from './NextButton.vue'

  export default {
    name: 'ProductList',
    components: {
      ProductTitle,
      ModulesPoints,
      NextButton
    },
    data () {
      return {
        isModify: false,
        path: '/orders/confirm'
      }
    },
    created () {
      this.$store.dispatch('getAllProductTypes')
    },
    computed: {
      ...mapGetters({
        types: 'allProductTypes'
      })
    },
    methods: {
      handleModifyClick () {
        this.isModify = !this.isModify
//        this.editing = !this.editing
      },
      tabChange (val) {
        this.num = val
      }
    }
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
    .wrapper {
      display: inline-block;
      position: relative;
      .icon-close {
        position: absolute;
        right: 25px;
        top: 18px;
        color: map-get($global-color-base, h);
        cursor: pointer;
      }
    }
    .type-item {
      margin-right: 45px;
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

  .hidden-type {
    padding-top: 5px;
    .wrapper {
      margin-top: -1px;
      margin-right: -1px;
      border: 1px dashed map-get($global-color-base, c);
    }
    .type-item {
      margin: 20px 30px;
    }
  }

  .change-type {
    width: 20%;
    text-align: right;
    button {
      @include normal-button(auto, 48px, 0);
      min-width: 120px;
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
