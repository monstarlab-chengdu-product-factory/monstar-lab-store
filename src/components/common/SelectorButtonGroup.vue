<template>
  <div>
    <ul class="selector-button-group">
      <li v-for="(button, index) in buttons" :key="button.id"   :id="button.id">
        <div @click=tab(index) >
          <selector-button :ref="'button'+index" :proLabel="button.name" :proIndex="index" />
        </div>
        <span v-show="editable" class="action-remove" @click="remove(index)">x</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import SelectorButton from './SelectorButton'
  import SubGroup from '../product/SubGroup'
  import bus from '../../util/bus.js'
  export default {
    name: 'SelectorButtonGroup',
    components: {
      'selector-button': SelectorButton,
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
        num: 0
      }
    },
    created () {
      let _this = this
      bus.$on('nextType', function () {
        _this.num++
        console.log(_this.num)
//        if (_this.num === _this.buttons.length - 1) {
//          return _this.num === 0
//        }
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

</style>
