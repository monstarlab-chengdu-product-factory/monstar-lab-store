<template>
  <div class="tab-con">
    <div class="type-con">
      <div class="type-item" v-for="(type, index) in types">{{type.name}}<span>30</span></div>
      <!--v-if="type.active"-->
    </div>
    <div class="change-type">
      <button class="change-btn" @click="changeType">{{alternative ? '保存' : '修改平台'}}</button>
    </div>
    <div class="unit-con">
      <div class="unit-item">共功能呢</div>
      <div class="unit-item">基本能呢</div>
      <div class="unit-item">基本共功</div>
      <div class="unit-item">基本能呢</div>
      <div class="icon-add">+</div>
    </div>
    <div class="product-type-tab">
      <div class="cat-selector">
        <selector-group :proButtonList="productTypes" @tab-change="tabChange" :editable="editing"></selector-group>

        <div>
          <ul class="selector-button-group">
            <li v-for="(button, index) in buttons" :key="button.id" :id="button.id">
              <div @click=tab(index)>
                <div class="selector-button " :class="{'selected' : selected}">
                  <input type="radio" name="check">
                  <div class="wrapper">
                    <label>{{ button.name }}</label>
                  </div>
                </div>
              </div>
              <span v-show="editable" class="action-remove" @click="remove(index)">x</span>
            </li>
          </ul>
        </div>

        <div class="alternative" v-if="alternative">
          <selector-group :proButtonList="productTypes" :proSingleSelected="true" @click="pushItem"></selector-group>
        </div>
        <div class="type-selector">
          <sub-type :proSingleSelected="true" :subtitle="subtitles" class="sub-type"></sub-type>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import SelectorButtonGroup from './SelectorButtonGroup'
  import SubGroup from './SubGroup'
  export default {
    name: 'ProductListTab',
    components: {
      'selector-group': SelectorButtonGroup,
      'sub-type': SubGroup
    },
    props: ['ids'],
    data () {
      return {
        productTypes: [{}],
        subTypes: [{}],
        alternative: false,
        num: 0,
        editing: false,
        property: ''
      }
    },
    computed: {
      ...mapGetters({
        types: 'allProductTypes'
      }),
      subtitles () {
        return this.productTypes[this.num].functions
      }
    },
    created () {
      this.$store.dispatch('getAllProductTypes')
    },
    methods: {
      changeTpye () {
        this.alternative = !this.alternative
        this.editing = !this.editing
      },
      tabChange (val) {
        this.num = val
      },
      pushItem () {
        console.log('s')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/stylesheet/variable";

  .product-type-tab {
    padding-top: 10px;
  }

  .type-selector {
    overflow-x: scroll;
  }

  .alternative {
    margin: 10px 0;
    .selector-button-group {
      li {
        width: 210px;
        height: 89px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px dashed map-get($global-color-base, c);
      }
    }
  }

  .cat-selector {
    position: relative;
    .selector-button {
      width: 150px;
      line-height: 48px;
      height: 48px;
      &.selected {
        &:after {
          display: none;
        }
      }
    }
    + .type-selector {
      margin-top: 10px;
    }
    .change {
      position: absolute;
      right: 0;
      width: 158px;
      height: 48px;
      top: 0;
      font-size: 16px;
    }
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
      cursor: pointer;
      span {
        padding-left: 5px;
      }
    }
  }

  .change-type {
    width: 20%;
    text-align: right;
    button {
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
</style>
