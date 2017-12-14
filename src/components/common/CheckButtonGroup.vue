<template>
  <el-checkbox-group :size="proSize">
    <check-button v-for="(button, index) in proButtonList" :key="button.id" :proHideCheckbox="proHideCheckbox"
                  :proLabel="button.title" :proIndex="index"
                  :subButton="button.functionUnits">
    </check-button>
    <!--category add-->
    <div class="add" @click="addCategory">+</div>
  </el-checkbox-group>
</template>
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
      addCategory () {
        this.proButtonList.push({
          title: '输入默认值'
        })
      }
//      anyButtonChecked: function (buttonData) {
//        this.$emit('anyButtonChecked', buttonData)
//      },
//      anyButtonUnchecked: function (buttonData) {
//        this.$emit('anyButtonUnchecked', buttonData)
//      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/stylesheet/components_import";
  .el-checkbox-group{
    width: 100%;
    display: flex;
    /*align-items: center;*/
    flex-direction: column;
    margin: 20px 0;
  }
  .add{
    width: 15px;
    height: 15px;
    line-height: 12px;
    border: 1px solid map_get($global-color-base,c);
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    margin-left: 40px;
  }
</style>

