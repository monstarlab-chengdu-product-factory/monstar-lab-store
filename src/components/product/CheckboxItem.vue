<template>
  <div class="item">
    <input type="checkbox"
           :checked="item.active"
           @change="toggleTypeSelected(item)">
    <label v-bind:for="item.id">
      <img :class="{hidden:isHidden}" v-if="item.icon" v-bind:src="item.icon" :alt="item.active">
      <div class="text-con">
        <h3>{{item.name}}</h3>
        <p :class="{hidden:isHidden}" v-if="item.icon">{{item.brief}}</p>
      </div>
    </label>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: 'CheckboxItem',
    props: ['item', 'isHidden'],
    data () {
      return {
      }
    },
    directives: {},
    methods: {
      ...mapMutations([
        'toggleTypeSelected'
      ])
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../assets/stylesheet/variable";

  @mixin icon-right($size,$font-size,$text-indent,$line-height,$color,$bg-color) {
    content: "\E611";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-bottom: $size solid $bg-color;
    border-left: $size solid transparent;
    color: $color;
    font-family: element-icons !important;
    font-size: $font-size;
    font-weight: bold;
    line-height: $line-height;
    text-indent: $text-indent;
  }

  .item {
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  input[type=checkbox] {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    border: 0;
    z-index: map-get($global-z-index, a);
    opacity: 0
  }

  label {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    overflow: hidden;
  }

  .image-checkbox {
    width: 100%;
    input:checked {
      + label {
        border: 4px solid map-get($global-color-base, primary);
        border-radius: 4px;
        &::after {
          @include icon-right(45px, 18px, -23px, 60px, #fff, map-get($global-color-base, primary))
        }
      }
    }

    img {
      width: 100%;
    }
    .text-con {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: wrap;
      width: 100%;
      height: 32%;
      padding-bottom: 15px;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent);
      h3 {
        width: 100%;
        font-size: 24px;
        font-weight: 400;
      }
      p {
        width: 100%;
      }
    }
  }

  .text-checkbox {
    .text-con {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    label {
      border: 1px solid map-get($global-color-base, c);
      border-radius: 4px;
      background-color: #fff;
    }
    input:checked {
      + label {
        &::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: 16px;
          height: 16px;
          background-position: right bottom;
          background-repeat: no-repeat;
        }
      }
    }
  }

  .bg-dark {
    max-width: 100px;
    height: 40px;
    margin: 0 auto;
    h3 {
      font-size: 16px;
    }
    input:checked {
      + label {
        border-color: map-get($global-color, border);
        background-color: map-get($global-color, border);
        h3 {
          color: #fff;
        }
        &::after {
          background: url("../../assets/image/icon-right-white.svg");
        }
      }
    }
  }

  .bg-light {
    min-width: 84px;
    height: 34px;
    h3 {
      color: map-get($global-color-base, primary);
      font-size: 14px;
    }
    input:checked {
      + label {
        border-color: map-get($global-color, border);
        h3 {
          color: map-get($global-color-base, d);
        }
        &::after {
          background: url("../../assets/image/icon-right-green.svg");
        }
      }
    }
  }

  .type-item{
    h3{
      font-size: 20px;
    }
  }
</style>
