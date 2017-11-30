<template>
  <div>
    <el-row type="flex">
      <el-col v-for="(label,index) in labels" :span="2" class="item" :key="index">
        <!--<el-button plain type="primary">-->
        <span>{{ label.name }}</span>
        <!--</el-button>-->
        <!--<input v-show="editAble" type="text" v-model="label">-->
        <!--<span v-show="selected" class="icon icon-checked"></span>-->
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'SubGroup',
    data () {
      return {
        labels: [
          {name: '基本功能'},
          {name: '基本功能'},
          {name: '电商功能'},
          {name: '社交功能'},
          {name: '其他功能'}
        ]
      }
    }
  }
</script>
<style lang='scss' scoped>
  .item {
    border-bottom: 1px solid #ccc;
  }
  .el-row{
    margin: 20px 0;
  }

</style>
