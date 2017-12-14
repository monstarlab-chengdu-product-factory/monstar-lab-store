<template>
  <div class="checkbox-group">
    <el-checkbox v-bind:class="{'hide-checkbox': proHideCheckbox}" :label="proLabel" :size="proSize" border>
      <span v-show="!editAble">{{ proLabel }}</span>
      <input v-show="editAble" type="text" v-model="proLabel">
      <span class="icon icon-checked"></span>
    </el-checkbox>
    <button-group class="child-button" :proLabel="item.title" :proIndex="proIndex" v-for="item in subButton" :key="item.id"></button-group>
  </div>
</template>
<script>
  import SelectorButton from './SelectorButton'
  export default {
    name: 'CheckButton',
    components: {
      'button-group': SelectorButton
    },
    props: {
      proId: {
      },
      proHideCheckbox: {
        default: false
      },
      proLabel: {
      },
      proEditAble: {
        default: false
      },
      proIndex: {
      },
      proSize: {
      },
      subButton: {}
    },
    data () {
      return {
        editAble: false
      }
    },
    methods: {
      toggleSelect: function (event) {
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/stylesheet/components_import";
  .el-checkbox {
    margin-right: 20px;
    width: 100px;
    height: 40px;
    overflow: hidden;

  &.hide-checkbox {
     background-color: #fff;
     position: relative;
  &.is-checked {
     color: #fff;
     background-color: map-get($global-color-base, primary);
     border-color: map-get($global-color-base, primary);
  &:after {
     content: "";
   @include triangle($direction: br, $border-width: 14px);
   @include position-location ($top: auto, $bottom: 0, $left: auto, $right: 0);
   }
  }
  .el-checkbox__inner {
    display: none;
  }
  .el-checkbox__label {
    padding-left: 8px;
  }
  .el-checkbox__input {
  &.is-checked {
  &+ .el-checkbox__label {
       color: #fff;
     }
  }
  }
  }
  }
  .checkbox-group{
    display: flex;
    margin: 10px 0;
  }
  .selector-button{
    margin: 0 10px;
    height: 34px;
    line-height: 34px;
    width: auto;
    min-width: 84px;

  }
</style>
