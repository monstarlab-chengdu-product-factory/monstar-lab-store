<template>
  <section class="confirm-con">
    <div class="wrapper">
      <product-title name="第三步:报价试算"></product-title>
      <div class="total-con">
        <h2>该项目预计需要：</h2>
        <el-row>
          <el-col :span="18">
            <div class="total-price">
              ¥ 19022.92 元
            </div>
            <p class="total-info">
              共有 3 个平台，26 个功能，88个模块，300个机能点；预计150工作日
            </p>
          </el-col>
          <el-col :span="6" class="total-list">
            <h3>价目概览</h3>
            <ul>
              <li>pintai:price</li>
            </ul>
          </el-col>
        </el-row>
      </div>

      <div class="form-action">
        <router-link to="/" class="btn-default">下载报价单</router-link>
        <router-link to="/" class="btn-default">分享此报价单</router-link>
        <router-link to="/" class="btn-default">调整项目需求</router-link>
      </div>

      <order-detail></order-detail>
    </div>
  </section>
</template>

<script>
  import OrderDetail from './OrderDetail'
  export default {
    name: 'OrderConfirm',
    data () {
      return {}
    },
    components: {
      OrderDetail
    },
    created () {

    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheet/variable";

  .confirm-con {
    width: 100%;
    background-color: map-get($global-color-base, e);
    .wrapper {
      width: 100%;
      max-width: map-get($global-width, break-point-lg);
      margin: 0 auto;
      padding: 2rem map-get($global-padding, a);
    }
  }

  h1 {
    padding-bottom: 2rem;
    font-size: 3.6rem;
    font-weight: 300;
  }

  .total-con {
    padding: 3rem 5rem;
    background-color: #fff;
    box-shadow: 3px 3px 3px map-get($global-color-base, c);
    h2 {
      font-size: 2.4rem;
      font-weight: 200;
    }
    .total-price {
      padding: 4rem 0;
      font-size: 6.4rem;
      font-weight: 400;
      color: map-get($global-color-base, f);
      text-align: center;
    }
    .total-info {
      padding: 0 4rem;
      line-height: 1.5;
      text-align: center;
    }
    .total-list {
      padding-left: 3rem;
      border-left: 1px solid map-get($global-color, border);
      h3 {
        font-size: 2rem;
        line-height: 2;
        font-weight: 200;
      }
      ul {
        line-height: 2;
      }
    }
  }

  .form-action {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem;
    a {
      width: 30%;
      padding: 1rem 0;
      text-align: center;
      background-color: map-get($global-color-base,primary);
      color: #fff;
      border-radius:3px;
      font-size: 1.8rem;
    }
  }
</style>
