<template>
  <section class="commercial-con">
    <carousel>
      <carousel-item v-for="item in items" :key="item.id" class="slides">
        <router-link :to="{name:'good-detail',params:{ id:item.id}}" class="link-item">
          <h3>{{item.name}}</h3>
          <img v-bind:src="item.coverUrl" alt="cover">
        </router-link>
      </carousel-item>
    </carousel>
  </section>
</template>

<script>
  import {
    Carousel,
    CarouselItem
  } from 'element-ui'

  import {getCommercials} from './commercial.service.js'

  export default {
    name: 'Commercial',
    components: {
      CarouselItem,
      Carousel
    },
    data: function () {
      return {
        items: {}
      }
    },
    created: function () {
      getCommercials(this)
        .then(data => {
          this.items = data
        })
//        .catch(console.error('vue error'))
    }
  }
</script>

<style lang="scss" scoped>
  .commercial-con {
    .slides {
      background-color: #eee;
    }
    .link-item {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>
