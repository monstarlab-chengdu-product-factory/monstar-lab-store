<template>
  <h1>{{ title }}</h1>
</template>

<script>
  export default {
    name: 'OrderTitle',
    props: ["title"],
    data(){
      return {
        title: this.title
      }
    }
  }
</script>
