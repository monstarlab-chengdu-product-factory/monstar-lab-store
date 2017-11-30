<template>
  <div class="list-con">
    <div class="list-item">
      <header class="table-header">
        <p>类型 机能数88</p>
        <router-link to='/'>调整需求</router-link>
      </header>
      <el-table
        :data="store"
        stripe
        :span-method="objectSpanMethod"
        border
        show-summary
        style="width: 100%">
        <el-table-column
          prop="id"
          label="功能"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="模块"
          width="120">
        </el-table-column>
        <el-table-column
          prop="amount1"
          label="机能点">
        </el-table-column>
        <el-table-column
          prop=""
          width="120"
          label="工时(人/日)">
          <template slot-scope="scope">
            <el-button size="mini" @click="decrement(scope.$index, scope.row)">-</el-button>
            <input type="number" :value="count">
            <el-button size="mini" @click="increment(scope.$index, scope.row)">+</el-button>
          </template>

        </el-table-column>
      </el-table>

      <!--<el-row>-->
      <!--<el-col>预留BUFF<input value="20">% 项目单价 2000 元/人／日</el-col>-->
      <!--<el-col>工时合计</el-col>-->
      <!--<el-col>800</el-col>-->
      <!--</el-row>-->

      <!--<el-row>-->
      <!--<el-col :span="24">商品种类合计 ¥9999.88</el-col>-->
      <!--</el-row>-->
      <!--</section>-->
    </div>
  </div>
</template>
<script>
  import { Table, TableColumn } from 'element-ui'

  export default {
    name: 'OrderDetail',
    components: {
      elTable: Table,
      elTableColumn: TableColumn
    },
    data () {
      return {
        store: [{
          id: '1',
          functionTypeName: '基本功能',
          title: '注册登录',
          functionUnits: [
            {
              title: '登录',
              unitPrice: 1000,
              hour: 5
            },
            {
              title: '注册',
              unitPrice: 1000,
              hour: 5
            }
          ]
        }]
      }
    },
    computed: {
      count () {
        return this.$store.state.count
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

      increment () {
        this.$store.commit('increment')
      },

      decrement () {
        this.$store.commit('decrement')
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

</style>
