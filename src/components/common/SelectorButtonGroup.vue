<template>
  <div class="selector-button-group">
    <ul>
      <li v-for="button in buttons" :key="button.id">
        <selector-button :proLabel="button.name"/>
      </li>
      <li v-if="appendAble">
        <a href="#"><span class="icon icon-add"></span></a>
      </li>
    </ul>
  </div>
</template>

<script>
  import SelectorButton from './SelectorButton'
  export default {
    name: 'SelectorButtonGroup',
    components: {
      'selector-button': SelectorButton
    },
    props: ['appendAble', 'buttonList'],
    data () {
      return {
        buttons: this.buttonList
      }
    }
  }
</script>
