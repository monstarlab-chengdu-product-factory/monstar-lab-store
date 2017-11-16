<template>
  <div class="type-selector-list">
    <ul>
      <li v-for="type in types" :key="type.id">
        <type-selector :url='type.icon' :name='type.name' :brief='type.brief'/>
      </li>
    </ul>
  </div>
</template>

<script>
  import { ProductService } from '../product/Product.service.js'
  import TypeSelector from './TypeSelector'
  export default {
    name: 'TypeSelectorList',
    components: {
      'type-selector': TypeSelector
    },
    data () {
      return {
        types: {}
      }
    },
    created () {
      let service = new ProductService()
      service.getProducts(this)
        .then(data => {
          this.types = data
        })
    }
  }
</script>
