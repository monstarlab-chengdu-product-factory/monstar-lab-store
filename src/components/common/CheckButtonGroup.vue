<template>
  <el-checkbox-group :size="proSize">
    <!--<check-button v-for="(button, index) in proButtonList" :key="button.id" :proHideCheckbox="proHideCheckbox"-->
                  <!--:proLabel="button.title" :proIndex="index"-->
                  <!--:subButton="button.functionUnits">-->
    <!--</check-button>-->
    <div class="checkbox-group" v-for="(button, bigIndex) in proButtonList">
      <div  class="category">
        <label>{{ button.title }}</label>
        <input  type="checkbox">
      </div>
      <ul class="child-button">
        <li v-for="(item,index) in button.functionUnits" :key="item.id">
          <input type="checkbox">
          <input type="text" autofocus v-model="item.title" v-if="item.editing" @blur="edit(item)" @keyup.enter="edit(item)">
          <label @dblclick="edit(item)">{{ item.title }}</label>
          <span v-if="item.editable" class="action-remove" @click="remove(bigIndex,index)">x</span>
        </li>
      </ul>
      <!--add function item-->
      <div class="add" @click="addItem(bigIndex)">+</div>
    </div>
    <!--category add-->
    <div class="add" @click="addCategory">+</div>
  </el-checkbox-group>
</template>
<script>
  export default {
    name: 'CheckButtonGroup',
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
        editAble: false
      }
    },
    methods: {
      addCategory () {
        this.proButtonList.push({
          title: '输入默认值'
        })
      },
      addItem (index) {
        this.proButtonList[index].functionUnits.push({
          title: '输入机能名',
          editing: false,
          editable: true
        })
      },
      edit (item) {
        item.editing = !item.editing
        item.editable = false
      },
      remove (bigIndex, index) {
        this.proButtonList[bigIndex].functionUnits.splice(index, 1)
      }
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
  .checkbox-group{
    display: flex;
    margin: 10px 0;
    align-items: center;
  }
  .selector-button{
    margin: 0 10px;
    height: 34px;
    line-height: 34px;
    width: auto;
    min-width: 84px;
  }
  .category{
    width: 100px;
    height: 40px;
    border: 1px solid #d8dce5;
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    margin: 0 10px;
    cursor: pointer;
    position: relative;
    color: map-get($global-color-base, b);
  label{
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 15px
  }
  input:checked +label{
    color: #fff;
    background-color: map-get($global-color-base, primary);
    width: 100%;
    height: 100%;
    display: block;
  }
  input{
    box-sizing: border-box;
    border: 0;
    font-size: 15px;
    -webkit-appearance:none;
    outline: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    font-weight: 300;
  &:checked+label{
     color: #fff;
     background-color: map-get($global-color-base, primary);
     width: 100%;
     height: 100%;
     display: block;
   }
  }
  }
  .child-button {
    width: auto;
    display: flex;
    align-items: center;
  li {
    min-width: 84px;
    height: 40px;
    margin: 0 10px;
    text-align: center;
    border-radius: 4px;
    position: relative;
    border: 1px solid #d8dce5;
  }
  label {
    display: inline-block;
    font-size: 15px;
    height: 100%;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    line-height: 40px;
    cursor: pointer;
    -webkit-appearance:none;
    color: map-get($global-color-base, primary);

  }
  input:checked +label{
    color: #fff;
    background-color: map-get($global-color-base, primary);
    width: 100%;
    height: 100%;
    display: block;
  }
  input{
    box-sizing: border-box;
    border: 0;
    font-size: 15px;
    -webkit-appearance:none;
    outline: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    font-weight: 300;
  }
  }
  .add{
    width: 15px;
    height: 15px;
    line-height: 12px;
    border: 1px solid map_get($global-color-base,c);
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    margin-left: 10px;
  }
  .active{
    background-color: map-get($global-color-base, primary);
    color: #fff;
  }
  .action-remove {
  @extend %smallActionButton;
  @include position-location ($top: 50%, $left: auto, $right: -20px);
  @include border-radius (8px);
    line-height: 1.3;
    margin-top: rem(-8px);
    cursor: pointer;
  &:hover{
     background-color: map_get($global-color-base,b);
   }
  }
</style>

