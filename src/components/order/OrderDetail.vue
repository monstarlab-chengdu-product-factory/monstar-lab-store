<template>
  <div class="list-con">
    <div class="list-item" v-for="p in products" :key="p.id">
      <header class="table-header">
        <p>{{p.firstClassName}} 机能数88</p>
        <router-link to='/'>调整需求</router-link>
      </header>

      <el-table
        :data="p.secondary"
        stripe
        :span-method="objectSpanMethod"
        border
        show-summary
        style="width: 100%">
        <el-table-column
          prop="secondaryClassName"
          label="功能"
          width="120">
        </el-table-column>
        <el-table-column
          prop="thirdClassName"
          label="模块"
          width="120">
        </el-table-column>
        <el-table-column
          prop="productsName"
          label="机能点">

        </el-table-column>
        <el-table-column
          prop="hour"
          width="160"
          label="工时(人/日)"
          class-name="hour-col">
          <template slot-scope="scope">
            <el-input-number v-model="count" @change="handleChange" :min="1" :max="100" size="mini"></el-input-number>
          </template>

        </el-table-column>
      </el-table>

      <el-row>
        <el-col>预留BUFF<input value="20">% 项目单价 2000 元/人／日</el-col>
        <el-col>工时合计</el-col>
        <el-col>800</el-col>
      </el-row>

      <el-row>
        <el-col :span="24">商品种类合计 ¥9999.88</el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import { Table, TableColumn, InputNumber } from 'element-ui'

  export default {
    name: 'OrderDetail',
    components: {
      elTable: Table,
      elTableColumn: TableColumn,
      elInputNumber: InputNumber
    },
    data () {
      return {
        count: 1,
        total: {
          price: 19922.00
        },
        products: [
          {
            id: 1,
            firstClassName: 'web服务',
            secondary: [
              {
                id: 1,
                parentId: 1,
                secondaryClassName: '基本功能',
                thirdClassName: '前台注册登录',
                productsName: [
                  '登录', '注册'
                ]
              },
              {
                id: 2,
                parentId: 1,
                secondaryClassName: '基本功能',
                thirdClassName: '前台注册登录',
                productsName: [
                  '登录', '注册'
                ]
              }
            ]
          },
          {
            id: 2,
            firstClassName: 'ios服务'
          }
        ]
      }
    },
    methods: {
      objectSpanMethod ({row, column, rowIndex, columnIndex}) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            }
          } else {
            return {
              rowspan: 0,
              colspan: 0
            }
          }
        }
      },
      getSummaries (param) {
        const {columns, data} = param
        const sums = []
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价'
            return
          }
          const values = data.map(item => Number(item[column.property]))
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr)
              if (!isNaN(value)) {
                return prev + curr
              } else {
                return prev
              }
            }, 0)
            sums[index] += ' 元'
          } else {
            sums[index] = 'N/A'
          }
        })
        return sums
      },
      handleChange (value) {
        console.log(value)
//        this.$store.commit('count')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheet/variable";

  .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0 map-get($global-padding, a);
    border-left: 5px solid map-get($global-color-base, primary);
    background-color: #fff;
    a {
      padding: 1rem 1.5rem;
      border-radius: 3px;
      background-color: map-get($global-color-base, primary);
      color: #fff;
    }
  }

  .list-item {
    margin-bottom: 4em;
  }

  .hour-col{
    background-color: #000;
    text-align: center;
    .el-input-number--mini {
      width: 100px;
    }
  }



</style>
