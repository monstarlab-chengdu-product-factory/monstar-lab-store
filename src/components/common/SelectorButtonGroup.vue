<template>
  <div class="selector-button-group">
    <ul>
      <li v-for="button in buttons" :key="button.id">
        <selector-button :label='button.label' :selected='button.selected' :removeAble='button.removeAble' :editAble='button.editAble'/>
      </li>
      <li v-if="appendAble">
        <a href="#"><span class="icon icon-add"></span></a>
      </li>
    </ul>
  </div>
</template>

<script>
  // import { ProductService } from '../product/Product.service.js'
  import SelectorButton from './SelectorButton'
  export default {
    name: 'SelectorButtonGroup',
    components: {
      'selector-button': SelectorButton
    },
    props: ['appendAble'],
    data () {
      return {
        buttons: {}
      }
    },
    created () {

    }
  }
</script>
