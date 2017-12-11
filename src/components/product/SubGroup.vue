<template>
    <el-row type="flex" :gutter="20">
      <el-col v-for="(label,index) in subtitle" :span="2" class="item" :key="index" :class="{editing:label===edited}">
        <label @dblclick="edit(label)" @keyup.enter="edit(label)" :class="{active:index==num}"  @click="tab(index)" >{{ label.name }}</label>
        <input type="text"  v-model="label.name" @keyup.enter="edit(label)" @blur="edit(label)" @keyup.esc="cancel(label)" class="edit">
        <span v-show="label.editable" class="action-remove" @click="removeItem(index)">x</span>
      </el-col>
      <div class="add" @click="addItem">+</div>
    </el-row>
</template>
<script>
  import Vue from 'vue'
  import {
    Row,
    Col,
    Tabs,
    TabPane
  } from 'element-ui'
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Tabs)
  Vue.use(TabPane)
  export default {
    name: 'SubGroup',
    props: ['subtitle'],
    data () {
      return {
        edited: null,
        active: false,
        num: 0,
        editable: false
      }
    },
    methods: {
      edit (label) {
        this.editedCache = label.name
        this.edited = label
        if (!label) {
          this.cancel(label)
        }
        label.editable = false
      },
      tab (index) {
        this.num = index
      },
      status () {
        this.active = !this.active
      },
      cancel (label) {
        label.name = this.editedCache
        console.log('this')
      },
      addItem () {
        this.subtitle.push({
          name: '输入功能名',
          editable: true
        })
      },
      removeItem (index) {
        this.subtitle.splice(index, 1)
      }
    }
  }
</script>
<style lang='scss' scoped>
  @import "../../assets/stylesheet/components_import";
  .item {
    min-width: 14rem;
    height: 4rem;
    line-height: 4rem;
    position: relative;
    input{
      position: absolute;
      top:0;
      left: 0;
      border: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 20px;
      &:focus{
    outline: 0;
    border: 0;
       }
    }
  }
  .el-row{
    margin: 20px 0;
    align-items: center;
  }
  .action-remove {
  @extend %smallActionButton;
  @include position-location ($top: 50%, $left: auto, $right: 10px);
  @include border-radius (8px);
    line-height: 1.3;
    margin-top: rem(-8px);
    cursor: pointer;
  }
  label{
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
    font-size: 20px;
    color: map_get($global-color-base,b);
    border-bottom: 4px solid map_get($global-color-base,c);

  }
  .edit{
    display: none;
  }
  .editing{
    .edit{
      display: block;
      width: 100%;
      text-align: center;
      font-size: 1.8rem;
      color: map_get($global-color-base,primary);
      height: 100%
    }
  }
  .active{
    border-bottom: 4px solid map_get($global-color-base,primary);
    color: #000;
  }
  .add{
    width: 15px;
    height: 15px;
    border: 1px solid map_get($global-color-base,c);
    text-align: center;
    cursor: pointer;
  }
</style>
