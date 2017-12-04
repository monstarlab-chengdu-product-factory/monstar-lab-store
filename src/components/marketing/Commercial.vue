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
        map-get($global-color-base, primary) 0%,
        map-get($global-color-base, third) 100%
    );
  }

  .link-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: map-get($global-width, break-point-lg);
    height: 100%;
    margin: 0 auto;
    padding: 0 map-get($global-padding, a);
    color: #fff;
    .text-con {
      width: 40%;
      h1 {
        padding-bottom: 2rem;
      }
      p {
        padding-bottom: 4rem;
        font-size: 2rem;
      }
      a{
        display: block;
        width: 15rem;
        padding: 1rem 0;
        border: 1px solid #fff;
        border-radius: 3px;
        font-weight: 400;
        text-align: center;
        color: #fff;
        &:hover{
          color: map-get($global-color,text-main);
          background-color: #fff;
        }
      }
    }
    .img-con {
      width: 60%;
      text-align: center;
    }
  }
</style>
