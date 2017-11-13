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
      let self = this
      this.$http.get('/api/commercials').then(function (response) {
        self.items = response.data
        console.log(response.data)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .commercial-con {
    .slides {
      background-color: #eee;
    }
    .link-item{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>
