<template>
  <div class="type-selector">
    <div class="image-wrapper">
      <img src="{{ typeImageUrl }}" alt="">
    </div>
    <div class="content">
      <h1>{{ typeName }}</h1>
      <p>{{ typeBrief }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TypeSelector',
    props: ['image','name','brief'],
    data (){
      return{
        typeImageUrl : this.image,
        typeName : this.name,
        typeBrief : this.brief
      }
    }
  }
</script>
