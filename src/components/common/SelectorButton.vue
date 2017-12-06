<template>
  <div class="selector-button" :class="{'selected' : selected, 'remove-able' : removeAble}">
    <div class="wrapper" @click="toggleSelect" >
      <label v-show="!editAble">{{ label }}</label>
      <input v-show="editAble" type="radio" v-model="label">
      <span v-show="selected" class="icon icon-checked"></span>
    </div>
    <a href="#" v-show="removeAble" class="action-remove"><span class="icon icon-remove">X</span></a>
  </div>
</template>

<style lang="scss">
  @import "../../assets/stylesheet/components_import";

  .selector-button {
    @include box($display: inline-block, $width: 150px, $height: 48px, $line-height: 48px, $text-align: center, $overflow: visible);
    @include bd(1px, solid, map-get($global-color, border));
    @include border-radius (4px);
    background-color: #fff;
    min-height: rem(40px);
    color: map-get($global-color-base, primary);
    min-width: rem(100px);
    position: relative;
    .wrapper {
      @include font-size(16px);
      cursor: pointer;
      padding: 0 rem(10px);
    }
    label {
      cursor: pointer;
    }
    .action-remove {
      @extend %smallActionButton;
      @include position-location ($top: 50%, $left: auto, $right: -21px);
      @include border-radius (8px);
      margin-top: rem(-8px);
    }
    &.selected {
      color: #fff;
      background-color: map-get($global-color-base, primary);
      border-color: map-get($global-color-base, primary);
      &:after {
        content: "";
        @include triangle($direction: br, $border-width: 14px);
        @include position-location ($top: auto, $bottom: 0, $left: auto, $right: 0);
      }
    }
    &.remove-able {
      margin-right: rem(26px);
      .action-remove {
        display: block;
      }
    }
  }

</style>

<script>
  export default {
    name: 'SelectorButton',
    props: {
      proId: {

      },
      proLabel: {

      },
//      proSelected: {
//        default: false
//      },
      proRemoveAble: {
        default: false
      },
      proEditAble: {
        default: false
      },
      proIndex: {
        default: 0
      }
    },
    data () {
      return {
        id: this.proId,
        label: this.proLabel,
        selected: this.proSelected,
        removeAble: this.proRemoveAble,
        editAble: this.proEditAble,
        index: this.proIndex
      }
    },
    watch: {
//      proId (value) {
//        this.id = value
//      },
//      proLabel (value) {
//        this.label = value
//      },
//      proSelected (value) {
//        this.selected = value
//      },
//      proRemoveAble (value) {
//        this.removeAble = value
//      },
//      proEditAble (value) {
//        this.editAble = value
//      },
//      proIndex (value) {
//        this.index = value
//      }
    },
    methods: {
      toggleSelect: function (event) {
        this.selected = !this.selected
        if (this.selected) {
          this.$emit('selectorSelected', {index: this.index, id: this.id})
        } else {
          this.$emit('selectorUnselected', {index: this.index, id: this.id})
        }
      }
    }
  }
</script>
