<template>
  <button @click="click">下一步</button>
</template>

<script>
  export default {
    name: 'NextButton',
    props: ['path'],
    methods: {
      click () {
        this.$router.push(this.path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheet/_variable.scss";
  button{
    display: block;
    width: 300px;
    height: 50px;
    margin: 2em auto;
    background-color: map-get($global-color-base,primary);
    border-radius: 6px;
    font-size: 20px;
    color: #fff;
  }
</style>
