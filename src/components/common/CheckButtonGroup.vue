<template>
  <el-checkbox-group :size="size">
    <ms-check-button v-for="(button, index) in buttons" :key="button.id" :proHideCheckbox="hideCheckbox" :proLabel="button.name" :proIndex="index"></ms-check-button>
  </el-checkbox-group>
</template>

<style lang="scss">
  @import "../../assets/stylesheet/components_import";
</style>


<script>
  import CheckButton from './CheckButton'
  export default {
    name: 'CheckButtonGroup',
    components: {
      'ms-check-button': CheckButton
    },
    props: {
      proSize: {
        default: 'small'
      },
      proAppendAble: {
        default: false
      },
      proButtonList: {
        default: [{}]
      },
      proHideCheckbox: {
        default: false
      }
    },
    data () {
      return {
        size: this.proSize,
        buttons: this.proButtonList,
        appendAble: this.proAppendAble,
        hideCheckbox: this.proHideCheckbox
      }
    },
    watch: {
      proSize (value) {
        this.size = value
      },
      proButtonList (value) {
        this.buttons = value
      },
      proAppendAble (value) {
        this.appendAble = value
      },
      proHideCheckbox (value) {
        this.hideCheckbox = value
      }
    },
    methods: {
      anyButtonChecked: function (buttonData) {
        this.$emit('anyButtonChecked', buttonData)
      },
      anyButtonUnchecked: function (buttonData) {
        this.$emit('anyButtonUnchecked', buttonData)
      }
    }
  }
</script>
