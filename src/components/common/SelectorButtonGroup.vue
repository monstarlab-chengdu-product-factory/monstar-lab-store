<template>
  <div class="selector-button-group">
    <ul>
      <li v-for="(button, index) in buttons" :key="button.id">
        <selector-button :proLabel="button.name" :proIndex="index" @selectorSelected="anySelectorSelected" @selectorUnselected="anySelectorUnselected"/>
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
    ul {
      @include flexbox($justify-content: left);
      li {
        margin-right: rem(30px);
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

<script>
  import SelectorButton from './SelectorButton'
  export default {
    name: 'SelectorButtonGroup',
    components: {
      'selector-button': SelectorButton
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
        buttons: this.proButtonList
      }
    },
    watch: {
      proButtonList (value) {
        this.buttons = value
      }
    },
    methods: {
      anySelectorSelected: function (selectorData) {
        if (this.proSingleSelected) {
          this.buttons.foreach(function (value, index, array) {
            if (selectorData.index !== index) {
              value.selected = false
            }
          })
        }
        this.$emit('anySelectorSelected', selectorData)
      },
      anySelectorUnselected: function (selectorData) {
        this.$emit('anySelectorUnselected', selectorData)
      }
    }
  }
</script>
