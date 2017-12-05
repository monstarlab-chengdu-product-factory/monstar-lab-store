<template>
  <div>
    <ul class="selector-button-group">
      <li v-for="(button, index) in buttons" :key="button.id">
        <selector-button :ref="'button'+index" :proLabel="button.name" :proIndex="index"
                         @selectorSelected="anySelectorSelected" @selectorUnselected="anySelectorUnselected" :class="{active:index==num}"  @click="tab(index)"/>
        <div class="type-selector" v-show="index===num">
          <sub-type :proSingleSelected="true" :subtitle="button.functions" class="sub-type"></sub-type>
        </div>
      </li>
      <li v-if="proAppendAble" class="action-cell">
        <a href="#" class="action-add"><span class="icon icon-add">+</span></a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  @import "../../assets/stylesheet/components_import";

  .selector-button-group {
  .active{
    color: red;
  }
      @include flexbox($justify-content: left);
      li {
        margin-right: rem(30px);
    }
  }
  .action-cell {
    text-align: center;
  }

  .action-add {
    @extend %smallActionButton;
  }
  .sub-type{
    /*display: none;*/
  }
</style>
<script>
  import SelectorButton from './SelectorButton'
  import SubGroup from '../product/SubGroup'

  export default {
    name: 'SelectorButtonGroup',
    components: {
      'selector-button': SelectorButton,
      'sub-type': SubGroup
    },
    props: {
      proAppendAble: {
        default: false
      },
      proButtonList: {
        default: [{}]
      },
      proSingleSelected: {
        default: false
      }
    },
    data () {
      return {
        buttons: this.proButtonList,
//        subtitles: [
//          {'name': '基本功能'},
//          {'name': '基本功能'},
//          {'name': '基本功能'}
//        ]
        subtitles: '',
        num: 1
      }
    },
    watch: {
      proButtonList (value) {
        this.buttons = value
      }
    },

    methods: {
      anySelectorSelected: function (selectorData) {
        // let selectedRef = 'button' + selectorData.index
        if (this.proSingleSelected) {
          let componentThis = this
          componentThis.buttons.forEach(function (value, index, array) {
            if (selectorData.index !== index) {
            }
          })
        }
        this.$emit('anySelectorSelected', selectorData)
      },
      anySelectorUnselected: function (selectorData) {
        this.$emit('anySelectorUnselected', selectorData)
      },
      tab (index) {
        this.num = index
      }
    }
  }
</script>
