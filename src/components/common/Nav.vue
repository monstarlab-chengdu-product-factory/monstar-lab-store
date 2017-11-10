<template>
  <section>
    <div class="board-con">board</div>
    <nav>
      <router-link to="/">good</router-link>
      <router-link to="/order">order</router-link>
      <router-link to="/user">user</router-link>
    </nav>

    <div>
      <router-link to="/login">登录</router-link>
      <router-link to="/logup">注册</router-link>
    </div>


  </section>
</template>

<script>
  export default {
    name: 'AppNav'
  }
</script>

<style>

</style>
