<template>
    <ul class="type-container" >
      <li v-for="type in types" :key="type.id" class="type-item "   v-model="checkbox">
        <product-item :type="type" v-on:checkbox="checkVal"></product-item>
      </li>
      <ul>
        <li v-for="add in adds">{{add.id}}</li>
      </ul>
    </ul>

</template>

<script>
//  import {ProductService} from '../product/Product.service.js'
  import ProductItem from '../product/ProductItem.vue'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'ProductTypeList',
    components: {
      'product-item': ProductItem
    },
    data: function () {
      return {
//        types: {},
        checkbox: []
      }
    },
    computed: {
      ...mapGetters({
        types: 'allTypes',
        adds: 'allAdds'
      })
    },
    methods: {
      ...mapActions({
        addToCart: 'addToCart'
      }),
      checkVal (checked, value) {
        if (checked) {
          this.checkbox.push(value)
        } else {
          this.checkbox.splice(this.checkbox.indexOf(value), 1)
        }
        this.$emit('checkbox', this.checkbox)
      }
    },
    created () {
      this.$store.dispatch('getAllTypes')
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/stylesheet/variable";
.type-item{
  width: 30%;
  margin: 20px;
  position: relative;
  overflow:hidden;
  height: 300px;
  img{
    width: 100%;
    border-radius: 4px;
  }

}
.type-container{
  width: 100%;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
}

</style>
