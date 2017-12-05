<template>
    <el-row type="flex" :gutter="20">
      <el-col v-for="(label,index) in labels" :span="2" class="item" :key="index" :class="{editing:label===edited}">
        <label @dblclick="edit(label)" @keyup.enter="edit(label)" :class="{active:index==num}"  @click="tab(index)">{{ label.name }}</label>
        <input type="text"  @keyup="edit(label)" v-model="label.name" @keyup.enter="edit(label)" @blur="edit(label)"
               @keyup.esc="cancel(label)" class="edit">
      </el-col>
    </el-row>
</template>
<script>
  import Vue from 'vue'
  import {
    Row,
    Col
  } from 'element-ui'
  Vue.use(Row)
  Vue.use(Col)
  export default {
    name: 'SubGroup',
    props: ['subtitle'],
    data () {
      return {
        labels: this.subtitle,
//        labels: [
//          {'name': '朋友圈'},
//          {'name': '朋友圈'}
//        ],
        edited: null,
        active: false,
        num: 0
      }
    },
    methods: {
      edit (label) {
        this.editedCache = label.name
        this.edited = label
        console.log(label)
        if (!label) {
          this.remove(label)
        }
      },
      tab (index) {
        this.num = index
      },
      status () {
        this.active = !this.active
      },
      cancel (label) {
        label.name = this.editedCache
        this.edited = null
      }
    }
  }
</script>
<style lang='scss' scoped>
  @import "../../assets/stylesheet/_variable.scss";
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
      font-size: 20px;
      &:focus{
    outline: 0;
    border: 0;
       }
    }
  }
  .el-row{
    margin: 20px 0;
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
      font-size: 1.2rem;
      color: map_get($global-color-base,primary);
      height: 100%
    }
  }
  .active{
    border-bottom: 4px solid map_get($global-color-base,primary);
    color: #000;
  }


</style>
