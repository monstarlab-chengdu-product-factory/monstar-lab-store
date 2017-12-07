<template>
  <div>
    <ul class="selector-button-group">
      <li v-for="(button, index) in buttons" :key="button.id"  @click=tab(index) v-bind:id="button.id" v-show="showIds && showIds.indexOf(button.id)!=-1">
        <selector-button :ref="'button'+index" :proLabel="button.name" :proIndex="index"/>
      </li>
      <!--<li v-if="proAppendAble" class="action-cell">-->
        <!--<a href="#" class="action-add"><span class="icon icon-add">+</span></a>-->
      <!--</li>-->
    </ul>
    <div class="type-selector">
      <sub-type :proSingleSelected="true" :subtitle="subtitles" class="sub-type"></sub-type>
    </div>
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
    props: [
      'showIds',
      'proButtonList'
    ],
    data () {
      return {
        buttons: this.proButtonList,
        num: 0
      }
    },
    watch: {
      proButtonList (value) {
        this.buttons = value
      }
    },
    computed: {
      subtitles () {
        return this.buttons[this.num].functions
      }
    },
    methods: {
//      anySelectorSelected: function (selectorData) {
//        // let selectedRef = 'button' + selectorData.index
//        if (this.proSingleSelected) {
//          let componentThis = this
//          componentThis.buttons.forEach(function (value, index, array) {
//            if (selectorData.index !== index) {
//            }
//          })
//        }
//        this.$emit('anySelectorSelected', selectorData)
//      },
//      anySelectorUnselected: function (selectorData) {
//        this.$emit('anySelectorUnselected', selectorData)
//      },
      tab (index) {
        this.num = index
        console.log(this.num)
        console.log(this.subtitles)
      }
    }
  }
</script>
