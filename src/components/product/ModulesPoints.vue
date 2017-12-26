<template>
  <div class="container">
    <div class="table-con">
      <header>
        <div class="header-title title-module">模块</div>
        <div class="header-title title-point">机能</div>
        <div class="btn-con">
          <button class="select-btn">全选</button>
        </div>
      </header>

      <section class="row-con">
        <div class="module-con">
          <checkbox-item class="text-checkbox big-size" :item="module"/>
        </div>
        <div class="point-con">
          <checkbox-item class="text-checkbox small-size" :item="point"/>
          <checkbox-item class="text-checkbox small-size" :item="point"/>
          <checkbox-item class="text-checkbox small-size" :item="point"/>
          <div class="icon-add">+</div>
        </div>
      </section>

      <footer>
        <div class="icon-add">+</div>
      </footer>
    </div>

    <div class="track-con">
      <header>modulesname >> pswname</header>
      <p>infoinfoinfoinfo</p>
      <img src="https://avatars0.githubusercontent.com/u/8784712?s=64&v=4" alt="">
    </div>
  </div>
</template>

<script>
  import CheckboxItem from '../common/CheckboxItem.vue'
  export default {
    name: 'ModulesPoints',
    components: {
      CheckboxItem
    },
    data () {
      return {
        module: {
          name: 'dsfdfsd'
        },
        point: {
          name: 'dddd'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheet/_variable.scss";

  .table-con {
    width: 100%;
    padding-right: 300px;
    header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 48px;
      padding-right: 10px;
      background-color: map-get($global-color-base, i);
      border: 1px solid map-get($global-color-base, c);
      font-size: 16px;
      .header-title {
        height: 100%;
        line-height: 46px;
      }
      .title-module {
        width: 15%;
        border-right: 1px solid map-get($global-color-base, c);
        text-align: center;
      }
      .title-point {
        width: 65%;
        padding-left: 15px;
      }
      .btn-con {
        width: 20%;
        text-align: right;
        .select-btn {
          height: 34px;
          padding: 0 25px;
          color: map-get($global-color-base, primary);
          border: 1px solid map-get($global-color-base, c);
          background: #fff;
          border-radius: 4px;
        }
      }
    }
    footer {
      width: 15%;
      padding-top: 20px;
      text-align: center;
    }
  }

  .row-con {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    padding-top: 20px;
    .module-con {
      width: 15%;
    }
    .point-con {
      display: flex;
      width: 85%;
      padding: 0 15px;
      .text-checkbox {
        padding-right: 10px;
      }
      .icon-add {
        margin-top: 10px;
      }
    }
  }

  .track-con {
    position: absolute;
    right: 0;
    top: 3em;
    width: 280px;
    height: auto;
    padding: 20px 15px;
    border: 1px solid map-get($global-color-base, c);
    border-radius: 6px;
    background: #fff;
    header {
      color: map-get($global-color-base, primary);
      font-size: 16px;
    }
    p {
      padding: 10px 0;
    }
    img {
      width: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      left: -7px;
      top: 30px;
      overflow: hidden;
      width: 12px;
      height: 12px;
      background-color: #fff;
      border-left: 1px solid map-get($global-color-base, c);
      border-bottom: 1px solid map-get($global-color-base, c);
      transform: rotate(45deg);
    }
  }
</style>
