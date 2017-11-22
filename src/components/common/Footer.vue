<template>
  <footer>
    <div class="wrapper">
      <router-link to="/products" class="board-con">
        <img src="../../assets/image/logo-white.svg" alt="MonstarLab">
      </router-link>
      <p>Copyright (C) 梦思特科技(成都)有限公司. All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer'
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheet/variable";

  footer {
    width: 100%;
    background-color: map-get($global-color-base, a);
    .wrapper{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: map-get($global-width,break-point-lg);
      margin: 0 auto;
      padding: 3.5rem map-get($global-padding,a);
      color: map-get($global-color-base, b);
    }
    img{
      opacity: .5;
    }
  }
</style>
