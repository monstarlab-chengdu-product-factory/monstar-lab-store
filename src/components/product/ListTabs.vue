<template>
  <div class="tab-con">
    <div class="type-con">
      <div class="selected-type">
        <div class="wrapper" v-if="type.active" v-for="(type, index) in types">
          <!--TODO: point counts isActive-->
          <div class="type-item">{{type.name}}<span>30</span></div>
        </div>
      </div>

      <div class="type-list" v-if="isChange">
        <div class="wrapper" v-for="(type, index) in types">
          <checkbox-item class="type-item text-checkbox bg-light" :item="type" :isHidden="true"/>
        </div>
      </div>
    </div>

    <div class="change-type">
      <button @click="handleChangeClick(types)">{{isChange ? '保存' : '修改平台'}}</button>
    </div>

    <div class="unit-con">
      <div class="unit-item">共功能呢</div>
      <div class="icon-add">+</div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import CheckboxItem from './CheckboxItem.vue'
  export default {
    name: 'ProductList',
    components: {
      CheckboxItem
    },
    data () {
      return {
        isChange: false
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
      ...mapMutations([
        'toggleTypeShow'
      ]),

      handleToggleType () {

      },

      handleChangeClick (types) {
        this.isChange = !this.isChange
        if (!this.isChange) {
          this.$store.dispatch('commitProductTypesChange', types)
        }
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

  .tab-con {
    display: flex;
    flex-flow: wrap;
    width: 100%;
    padding-top: 30px;
    .type-con {
      width: 80%;
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
  }

  .wrapper {
    display: inline-block;
    position: relative;
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

  .type-list {
    padding-top: 5px;
    .wrapper {
      margin-top: -1px;
      margin-right: -1px;
      border: 1px dashed map-get($global-color-base, c);
      .type-item {
        margin: 20px 30px;
        border:none;
      }
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
</style>
