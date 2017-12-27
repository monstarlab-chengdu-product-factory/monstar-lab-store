<template>
  <div class="list-con">
    <div class="list-item" v-for="p in products" :key="p.id">
      <header class="table-title">
        <p>{{p.firstClassName}} 机能数88</p>
        <router-link to='/'>调整需求</router-link>
      </header>

      <table border="1">
        <tr class="table-header">
          <th class="unit">功能</th>
          <th class="module">模块</th>
          <th class="point">机能点</th>
          <th class="hour">工时(人/日)</th>
        </tr>

        <tr class="table-body">
          <td class="unit"></td>
          <td class="module"></td>
          <td class="point"></td>
          <td class="hour">
            <el-input-number v-model="count" @change="handleChange" :min="1" :max="100" size="mini"></el-input-number>
          </td>
        </tr>
      </table>

      <table class="total-info">
        <td class="total-input">
          <div>预留BUFF<input value="20">%</div>
          <div>项目单价<input value="2000">元/人／日</div>
        </td>
        <td class="hour-text">工时合计</td>
        <td class="total-hour">800</td>
      </table>

      <footer>
        <div>tabletitlename合计<span>¥9999.88</span></div>
      </footer>
    </div>
  </div>
</template>

<script>
  import {Table, TableColumn, InputNumber} from 'element-ui'

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

  .list-item {
    margin-bottom: 4em;
  }

  .table-title {
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

  table {
    width: 100%;
    background-color: #fff;
    .table-header {
      background-color: map-get($global-color-base, i);
      text-align: center;
    }
    .table-body {

    }
    th, td {
      padding: 20px 15px;
      border: 1px solid map-get($global-color-base, c);
    }
    .unit {
      width: 15%;
    }
    .module {
      width: 15%;
    }
    .point {
      width: 55%;
    }
    .hour {
      width: 15%;
    }
  }

  .total-info {
    width: 100%;
    margin-top: 5px;
    background-color: map-get($global-color-base, c);
    .total-input {
      width: 70%;
      border-right: none;
      background-color: #fff;
      text-align: center;
      div {
        display: inline-block;
        + div {
          padding-left: 20px;
        }
      }
      input {
        width: 60px;
        padding: 0 10px 3px 10px;
        margin: 0 10px;
        border: none;
        border-bottom: 1px solid map-get($global-color-base, c);
        font-size: 20px;
        text-align: center;
      }
    }
    .hour-text {
      width: 15%;
      border-left: none;
      background-color: #fff;
      text-align: right;
    }
    .total-hour {
      width: 15%;
      text-align: center;
      background-color: #fff;
      font-size: 20px;
      font-weight: 400;
    }
  }

  footer {
    width: 100%;
    padding:20px 0;
    text-align: right;
    span{
      display: inline-block;
      width:15%;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
    }
  }

  .el-input-number--mini {
    display: block;
    width: 100px;
    margin: 0 auto;
  }

</style>
