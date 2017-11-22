<template>
  <div class="list-con">
    <div class="list-item">
      <header class="table-header">
        <p>类型 机能数88</p>
        <router-link to='/'>调整需求</router-link>
      </header>
      <section class="table-con">
        <el-row class="table-title">
          <el-col :span="4">功能</el-col>
          <el-col :span="20">
            <el-col :span="5">模块</el-col>
            <el-col :span="14">机能点</el-col>
            <el-col :span="5">工时(人/日)</el-col>
          </el-col>
        </el-row>

        <el-row v-for="data in datas" :key="data.id" class="table-main">
          <el-col :span="4">{{data.functionType}}</el-col>
          <el-col :span="20">
            <el-col :span="5">
              222
            </el-col>
            <el-col :span="14" class="story-list">
              3333
            </el-col>
            <el-col :span="5">
              <span>-</span>
              <input class="input" value="3">
              <span>+</span>
            </el-col>
          </el-col>
        </el-row>

        <el-row>
          <el-col>预留BUFF<input value="20">% 项目单价 2000 元/人／日</el-col>
          <el-col>工时合计</el-col>
          <el-col>800</el-col>
        </el-row>

        <el-row>
          <el-col :span="24">商品种类合计 ¥9999.88</el-col>
        </el-row>
      </section>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'OrderDetail',
    data () {
      return {
        datas: [{
          functionType: '基本功能',
          modules: [{
            module: '第三方登录',
            story: '微信 QQ 微博',
            hour: '3'
          }]
        }]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/stylesheet/variable";

  $table-line-height: 60px;

  .list-item {
    border: 1px solid map-get($global-color-base, c);
  }

  .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: $table-line-height;
    padding: 0 map-get($global-padding, a);
    border-left: 5px solid map-get($global-color-base, primary);
    background-color: #fff;
    a {
      padding: .5rem 1rem;
      border-radius: 3px;
      background-color: map-get($global-color-base, primary);
      color: #fff;
    }
  }

  .table-con {
    line-height: $table-line-height;
    .el-row {
      border-top: 1px solid map-get($global-color-base, c);
    }
    .table-title {
      border-top: 1px solid map-get($global-color-base, c);
      line-height: 50px;
      text-align: center;
    }
    .table-main {
      background-color: #fff;
    }
  }

</style>
