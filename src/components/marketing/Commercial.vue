<template>
  <section class="commercial-con">
    <carousel :autoplay="false" class="carousel-con" :if="items">
      <carousel-item v-for="item in items" :key="item.id">
        <router-link to="/" class="link-item">
          <div class="text-con">
            <h1>{{item.name}}</h1>
            <p>{{item.brief}}</p>
            <router-link to="/product">{{buttonText}}</router-link>
            <!--<el-button type="primary" @click="next">{{buttonText}}</el-button>-->
          </div>
          <div class="img-con">
            <img v-bind:src="item.coverUrl" alt="cover">
          </div>
        </router-link>
      </carousel-item>
    </carousel>
  </section>
</template>
<script>
  import { Carousel, CarouselItem } from 'element-ui'
  import { CommercialService } from './Commercial.service.js'
  export default {
    name: 'Commercial',
    data () {
      return {
        items: {},
        buttonText: '开始我的报价'
      }
    },
//    methods: {
//      next () {
//        this.$router.push({name: 'product'})
//      }
//    },
    components: {
      Carousel,
      CarouselItem
    },
    created () {
      let service = new CommercialService()
      service.getCommercials().then(data => {
        this.items = data
      })
      //        .catch(console.error('vue error'))
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheet/variable";

  .commercial-con {
    background: linear-gradient(
        -180deg,
        map-get($global-color-base, secondary) 0%,
        map-get($global-color-base, third) 100%
    );
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
