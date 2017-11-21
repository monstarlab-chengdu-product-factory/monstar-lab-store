<template>
  <section>
    <div class="comfirm-con">
      <header>第三步：报价试算</header>

      <div class="list-con">
        <div class="list-item">
          <header>
            <p>类型 机能数88</p>
            <router-link to='/'>调整需求</router-link>
          </header>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="function"
              label="功能"
              width="180">
            </el-table-column>
            <el-table-column
              prop="module"
              label="模块"
              width="180">
            </el-table-column>
            <el-table-column
              prop="story"
              label="机能点">
            </el-table-column>
            <el-table-column
              prop="hour"
              label="工时(人/日)">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!-- <router-view/> -->
  </section>
</template>
<script>
  import {table, tableColumn} from 'element-ui'
  export default {
    name: 'Order',
    data () {
      return {
        tableData: [{
          function: '2016-05-02',
          module: '王小虎',
          sotry: 'story',
          hour: '333'
        }]
      }
    },
    components: {
      elTable: table,
      elTableColumn: tableColumn
    }
  }
</script>
