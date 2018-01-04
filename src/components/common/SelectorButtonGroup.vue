<template>
  <div>
    <ul class="selector-button-group">
      <li v-for="(button, index) in allAdded" :key="button.id"   :id="button.id">
        <div @click=tab(index) >
          <div class="selector-button "  :class="{'selected' : selected}" >
            <input type="radio" name="check">
            <div class="wrapper">
              <label >{{ button.name }}</label>
              <!--<input v-show="proEditAble" type="radio" v-model="proLabel">-->
              <!--<span v-show="selected" class="icon icon-checked"></span>-->
            </div>
            <!--<span v-show='proRemoveAble'   class="action-remove" >x</span>-->
          </div>
        </div>
        <span v-show="editable" class="action-remove" @click="remove(index)">x</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import SubGroup from '../product/SubGroup'
  import bus from '../../util/bus.js'
  import {mapGetters} from 'vuex'

  export default {
    name: 'SelectorButtonGroup',
    components: {
      'sub-type': SubGroup
    },
    props: [
      'showIds',
      'proButtonList',
      'editable'
    ],
    data () {
      return {
        buttons: this.proButtonList,
        num: 0,
        active: false,
        selected: '',
        functionData: ''
      }
    },
    created () {
      let _this = this
      bus.$on('functionData', function (value) {
        _this.functionData = value
      })
      bus.$on('nextType', function () {
        if (_this.num < _this.buttons.length) {
          _this.num++
        }
        if (_this.num === _this.buttons.length) {
          _this.$router.push({name: 'orderConfirm', params: {data: _this.functionData}})
          _this.num = 0
        }
      })
    },
    watch: {
      proButtonList (value) {
        this.buttons = value
      },
      num: function () {
        this.$emit('tab-change', this.num)
      }
    },
    computed: {
      ...mapGetters({
        allAdded: 'allAdded'
      }),
      subtitles () {
        return this.buttons[this.num].functions
      }
    },
    methods: {
      tab (index) {
        this.num = index
        this.$emit('tab-change', this.num)
      },
      remove (index) {
        this.proButtonList.splice(index, 1)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/stylesheet/components_import";
  .selector-button-group {
  .active{
    color: red;
  }
  @include flexbox($justify-content: left);
  li {
    margin-right: rem(30px);
    position: relative;
  }
  .action-remove {
  @extend %smallActionButton;
  @include position-location ($top: 50%, $left: auto, $right: -25px);
  @include border-radius (8px);
    line-height: 1.3;
    margin-top: rem(-8px);
    cursor: pointer;
  &:hover{
    background-color: map_get($global-color-base,b);
   }
  }
  }
  .action-cell {
    text-align: center;
  }

  .action-add {
  @extend %smallActionButton;
  }
  .selector-button {
  @include box($display: inline-block, $width: 150px, $height: 48px, $line-height: 48px, $text-align: center, $overflow: visible);
  @include bd(1px, solid, map-get($global-color, border));
  @include border-radius (4px);
    background-color: #fff;
    min-height: rem(40px);
    color: map-get($global-color-base, primary);
    width: 150px;
    position: relative;
  .wrapper {
  @include font-size(16px);
    cursor: pointer;
    padding: 0 rem(10px);
  }
  label {
    cursor: pointer;
  }
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
