<template>
    <el-row type="flex" :gutter="20">
      <el-col v-for="(label,index) in subtitle" :span="2" class="item" :key="index" :class="{editing:edited===label}">
        <label @dblclick="edit(label,index)"
               :class="{active:index==num}"  @click="tab(index,label)" >{{ label.name }}</label>
        <input type="text"  v-model="label.name" @keyup.enter="blur(label,index)"  @keyup.esc="cancel(label)" @blur="blur(label,index)" class="edit">
        <span v-show="label.editable" class="action-remove" @click="removeItem(index)">x</span>
      </el-col>
      <div class="add" @click="addItem">+</div>
    </el-row>
</template>
<script>
  import bus from '../../util/bus.js'
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
      edit (label, index) {
        this.editedCache = label.name
        this.edited = label
        if (!label) {
          this.removeItem(index)
        }
        label.editable = false
      },
      blur (label, index) {
        if (!label.name) {
          this.removeItem(index)
        }
        this.edited = null
      },
      tab (index, label) {
        this.num = index
      },
      status () {
        this.active = !this.active
      },
      cancel (label) {
        label.name = this.editedCache
        this.edited = null
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
    },
    created () {
      let _this = this
      bus.$on('nextOne', function () {
        _this.num++
        if (_this.num === _this.subtitle.length) {
          this.$emit('nextType')
        }
      })
    },
    watch: {
      num: function ({newValue = 0}) {
//        let _this = this
        bus.$emit('typeId', this.subtitle[newValue].id)
      }
    },
    updated () {
//      let _this = this
      bus.$emit('typeId', this.subtitle[this.num].id)
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
