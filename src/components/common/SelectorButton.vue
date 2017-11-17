<template>
  <div class="selector-button" v-bind:class="{'selected' : selected}">
    <div class="wrapper">
      <label v-show="!editAble" v-bind="label"></label>
      <input v-show="editAble" type="text" v-model="label">
      <span v-show="selected" class="icon icon-checked"></span>
    </div>
    <a href="#" v-show="removeAble" class="action-remove"><span class="icon icon-remove"></span></a>
  </div>
</template>

<style lang="scss">
  @import "../../assets/stylesheet/component_import";

  .selector-button {
    @include box($display: inline-block, $width: auto, $height: 40px, $line-height: 40px, $text-align: center);
    @include font-size(16px);
    @include bd(1px, solid, map-get($global-color, border));
    @include border-radius (5px);
    background-color: #fff;
    cursor: pointer;
    min-width: rem(100px);
    padding: rem(10px);
    position: relative;
    &.selected {
      color: #fff;
      background-color: map-get($global-color-base, primary);
      border-color: map-get($global-color-base, primary);
      &:after {
        content: "";
        @include triangle($direction: br);
        @include position-location ($top: auto, $bottom: 0, $left: auto, $right: 0);
      }
    }
  }

</style>

<script>
  export default {
    name: 'SelectorButton',
    props: ['proLabel', 'proSelected', 'proRemoveAble', 'proEditAble'],
    data () {
      return {
        label: this.proLabel,
        selected: this.proSelected,
        removeAble: this.proRemoveAble,
        editAble: this.proEditAble
      }
    }
  }
</script>