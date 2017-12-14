<template>
  <el-checkbox-group :size="proSize">
    <check-button v-for="(button, index) in proButtonList" :key="button.id" :proHideCheckbox="proHideCheckbox"
                  :proLabel="button.title" :proIndex="index"
                  :subButton="button.functionUnits"></check-button>
  </el-checkbox-group>
</template>

<style lang="scss">
  @import "../../assets/stylesheet/components_import";
  .el-checkbox-group{
    width: 100%;
    display: flex;
    flex-direction: column;
     margin: 20px 0;
  }
</style>


<script>
  import CheckButton from './CheckButton'
  export default {
    name: 'CheckButtonGroup',
    components: {
      'check-button': CheckButton
    },
    props: {
      proSize: {
        default: 'big'
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
