<template>
  <section class="commercial-con">
    <el-carousel :autoplay="false" class="carousel-con">
      <el-carousel-item v-for="item in items" :key="item.id">
        <router-link :to="{name:'product-detail',params:{ id:item.id}}" class="link-item">
          <div class="text-con">
            <h1>{{item.name}}</h1>
            <p>{{item.brief}}</p>
            <el-button>立即报价</el-button>
          </div>
          <div class="img-con">
            <img v-bind:src="item.coverUrl" alt="cover">
          </div>
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
  import { CommercialService } from './commercial.service.js'

  export default {
    name: 'Commercial',
    data () {
      return {
        items: {}
      }
    },
    created () {
      let service = new CommercialService()
      service.getCommercials(this)
        .then(data => {
          this.items = data
        })
//        .catch(console.error('vue error'))
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheet/variable";

  .commercial-con {
    background: linear-gradient(-180deg, map-get($global-color, e) 0%, map-get($global-color, f) 100%);
  }

  .link-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    color: #fff;
    .text-con {
      padding-left: 8rem;
      h1 {
        padding-bottom: 2rem;
      }
      p {
        padding-bottom: 4rem;
        font-size: 2rem;
      }
    }
    .img-con {
      padding-right: 8rem;
    }
  }
</style>
