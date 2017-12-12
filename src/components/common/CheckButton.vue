<template>
  <div class="checkbox-group">
    <div  class="category">
      <label>{{ proLabel }}</label>
      <input  type="checkbox">
      <!--<span class="icon icon-checked"></span>-->
    </div>
    <ul class="child-button">
      <li v-for="(item,index) in subButton" :key="item.id">
        <!--<input type="checkbox">-->
        <input type="text" autofocus v-model="item.title" v-if="item.editing" @blur="edit(item)" @keyup.enter="edit(item)">
        <label @dblclick="edit(item)">{{ item.title }}</label>
        <span v-if="item.editable" class="action-remove" @click="remove(index)">x</span>
      </li>
    </ul>
    <!--add function item-->
    <div class="add" @click="addItem()">+</div>
  </div>
</template>
<script>
  export default {
    name: 'CheckButton',
    props: {
      proId: {
      },
      proHideCheckbox: {
        default: false
      },
      proLabel: {
      },
      proEditAble: {
        default: false
      },
      proIndex: {
      },
      proSize: {
      },
      subButton: {}
    },
    data () {
      return {
        editAble: false
      }
    },
    methods: {
      addItem () {
        this.subButton.push({
          title: '输入机能名',
          editing: false,
          editable: true
        })
      },
      edit (item) {
        item.editing = !item.editing
        item.editable = false
      },
      remove (index) {
        this.subButton.splice(index, 1)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/stylesheet/components_import";
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
