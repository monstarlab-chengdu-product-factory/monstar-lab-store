<template>
  <div>
    <el-checkbox v-bind:class="{'hide-checkbox': hideCheckbox}" :label="label" :size="size" border>
      <span v-show="!editAble">{{ label }}</span>
      <input v-show="editAble" type="text" v-model="label">
      <span class="icon icon-checked"></span>
    </el-checkbox>
    <button-group class="child-button" :proLabel="title" :proIndex="index">whs</button-group>
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
        id: this.proId,
        hideCheckbox: this.proHideCheckbox,
        label: this.proLabel,
        editAble: this.proEditAble,
        index: this.proIndex,
        size: this.proSize,
        title: this.subButton
      }
    },
    watch: {
      proId (value) {
        this.id = value
      },
      proLabel (value) {
        this.label = value
      },
      proHideCheckbox (value) {
        this.hideCheckbox = value
      },
      proEditAble (value) {
        this.editAble = value
      },
      proIndex (value) {
        this.index = value
      },
      proSize (value) {
        this.size = value
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
</style>
