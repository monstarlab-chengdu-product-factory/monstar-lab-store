<template>
  <div class="container-fluid">
    <div class="bg-white">
      <product-title name="第二步:功能评估"></product-title>
      <product-list-tab/>
    </div>

    <div class="bg-grey">
      <modules-points/>

      <!--<el-row class="model-title" :gutter="20">-->
        <!--<el-col v-for="item in table" :span="3" :key="item.id">{{item.name}}</el-col>-->
        <!--<el-button class="all" @click="checkAll">全选</el-button>-->
      <!--</el-row>-->
      <!--<type-product-list :proButtonList="proper" :proHideCheckbox="true" :proSize="'big'"></type-product-list>-->

      <div class="next-button">
        <el-button type="primary" plain class="function-next" @click="toNext()">下一步</el-button>
        <p @click="nextType" class="skip-type">跳过其他功能进入下一平台</p>
      </div>
    </div>

  </div>
</template>
<script>
  import ProductTitle from '../common/ProductTitle.vue'
  import ModulesPoints from './ModulesPoints.vue'
  import NextButton from '../common/NextButton.vue'
  import ProductListTab from './ProductListTab'
  import CheckButtonGroup from './CheckButtonGroup'
  import Products from '../../api/property.js'
  import bus from '../../util/bus.js'

  export default {
    name: 'ProductList',
    components: {
      ProductTitle,
      ModulesPoints,
      NextButton,
      ProductListTab,
      'type-product-list': CheckButtonGroup
    },
    props: [],
    data () {
      return {
        products: [],
        property: [],
        table: [
          {'name': '模块'},
          {'name': '机能'}
        ],
        proper: ''
      }
    },
    created () {
      Products.getProperties(properties => {
        this.property = properties
      })
      let _this = this
      bus.$on('typeId', function (value) {
        _this.proper = _this.property.filter(v => v.functionTypeId === value)
      })
    },
    methods: {
      checkAll () {
        console.log('this')
      },
      toNext () {
        bus.$emit('nextOne')
      },
      nextType () {
        bus.$emit('nextType')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheet/_variable.scss";

  .bg-white {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .model-title {
    width: 100%;
    height: 4rem;
    font-size: 16px;
    border: solid 1px map_get($global-color-base, c);
    position: relative;
    background-color: #f8f8f8;
    .el-col {
      text-align: center;
      line-height: 48px;
      &:nth-child(1) {
        border-right: 1px solid map_get($global-color-base, c);
      }
    }
  }

  .all {
    position: absolute;
    right: 1rem;
    top: .5rem;
    width: 84px;
    height: 34px;
    border-radius: 4px;
    color: map_get($global-color-base, primary);
    background-color: #ffffff;
    border: solid 1px map_get($global-color-base, c);
  }

  .next-button {
    margin: 60px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    a {
      display: block;
      width: 300px;
      text-align: center;
      line-height: 2;
      color: map_get($global-color-base, f);
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .function-next {
    width: 300px;
    height: 50px;
    font-size: 18px;
    font-weight: 300;
  }

  .skip-type {
    color: #3a99d8;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
  }

  .bg-grey {
    width: 100%;
    min-height: 50vh;
    background-color: map-get($global-color-base, j);
  }

</style>
