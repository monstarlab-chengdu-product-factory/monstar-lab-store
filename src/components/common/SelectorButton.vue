<template>
  <div class="selector-button "  :class="{'selected' : selected}" >
    <input type="radio" name="check">
    <div class="wrapper">
      <label >{{ proLabel }}</label>
      <!--<input v-show="proEditAble" type="radio" v-model="proLabel">-->
      <!--<span v-show="selected" class="icon icon-checked"></span>-->
    </div>
      <!--<span v-show='proRemoveAble'   class="action-remove" >x</span>-->
  </div>
</template>
<script>
  export default {
    name: 'SelectorButton',
    props: {
      proId: {
      },
      proLabel: {
      },
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
        selected: this.proSelected,
        active: false
      }
    },
    methods: {
      remove () {

      }
    }
  }
</script>
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
  /*.action-remove {*/
  /*@extend %smallActionButton;*/
  /*@include position-location ($top: 50%, $left: auto, $right: -20px);*/
  /*@include border-radius (8px);*/
    /*line-height: 1.3;*/
    /*margin-top: rem(-8px);*/
    /*cursor: pointer;*/
  /*}*/
  &.remove-able {
     margin-right: rem(26px);
  .action-remove {
    display: block;
  }
  }
  input[type="radio"]:checked +.wrapper{
    color: #fff;
    background-color: map-get($global-color-base, primary);
    width: 100%;
    height: 100%;
    display: block;
  }
  input[type='radio']{
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    border: 0;
    margin: 0;
    /*z-index: -1;*/
    top: 0;
    &:checked{
    outline: none;
     }
     &:focus{
     outline: none;
    }
  }
  }

</style>
