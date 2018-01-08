<template>
  <div class="tab-con">
    <div class="type-con">
      <div class="selected-type">
        <div class="wrapper" v-if="type.active" v-for="(type, index) in types">
          <!--TODO: point counts isActive-->
          <div class="type-item" :class="{'is-selected':index === selectedType}"
               @click="handleTabClick(index, type.id)">
            {{type.name}}<span>30</span>
          </div>
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
      <div class="unit-list" v-for="(type, index) in types" :class="{'hidden': index != selectedType}">
        <div class="unit-item" v-for="(unit, index) in type.units" :class="{'is-selected':index === selectedUnit}"
             @click="handleSubTabClick(index, unit.id)">
          {{unit.name}}
        </div>
      </div>
      <div class="icon-add">+</div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import * as messages from '../../consist/message'
  import CheckboxItem from './CheckboxItem.vue'

  export default {
    name: 'ProductList',
    components: {
      CheckboxItem
    },
    data () {
      return {
        isChange: false,
        selectedType: 0,
        selectedUnit: 0
      }
    },
    created () {
      return {}
    },
    computed: {
      ...mapGetters({
        types: 'allProductTypes'
      })
    },
    methods: {
      ...mapActions([
        'getProducts'
      ]),
      ...mapMutations([
        'typeSelected', 'unitSelected'
      ]),
      handleChangeClick (types) {
        let activeItem = types.find(t => t.show === true)
        if (!activeItem) {
          return alert(messages.MUSTSELECTED.Chinese)
        } else {
          this.isChange = !this.isChange
          if (!this.isChange) {
            this.$store.dispatch('commitProductTypesChange', types)
          }
        }
      },
      handleTabClick (index, typeId) {
        this.selectedType = index
        this.selectedUnit = 0
        console.log(typeId)
        this.typeSelected(typeId)
      },
      handleSubTabClick (index, unitId) {
        this.selectedUnit = index
        this.unitSelected(unitId)
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

  %unit-active {
    color: map-get($global-color-base, d);
    border-bottom-color: map-get($global-color, border);
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

  .selected-type {
    .type-item {
      &.is-selected {
        color: #fff;
        background-color: map-get($global-color-base, primary);
      }
    }
  }

  .type-list {
    padding-top: 5px;
    .wrapper {
      margin-top: -1px;
      margin-right: -1px;
      border: 1px dashed map-get($global-color-base, c);
    }
    .type-item {
      margin: 20px 30px;
      border: none;
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
        @extend %unit-active;
      }
      &.is-selected {
        @extend %unit-active;
      }
    }
    .icon-add {
      margin-left: 15px;
    }
  }
</style>
