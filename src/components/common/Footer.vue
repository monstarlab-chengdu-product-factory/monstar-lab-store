<template>
  <footer>
    <router-link to="/products" class="board-con">
      <img src="../../assets/image/logo-white.svg" alt="MonstarLab">
    </router-link>
    <p>Copyright (C) 梦思特科技(成都)有限公司. All Rights Reserved</p>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.5rem map-get($global-padding,a);
    background-color: map-get($global-color-base, a);
    color: map-get($global-color-base, b);

    img{
      opacity: .5;
    }
  }
</style>
