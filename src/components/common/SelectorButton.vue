<template>
  <div class="selector-button" v-bind:class="{'selected' : selected}">
    <div class="wrapper">
      <label v-show="!editAble" v-bind="label"></label>
      <input v-show="editAble" type="text" v-model="label">
      <span v-show="selected" class="icon icon-checked"></span>
    </div>
    <a href="#" v-show="removeAble" class="action-remove"><span class="icon icon-remove"></span></a>
  </div>
</template>

<script>
  export default {
    name: 'SelectorButton',
    props: ['label', 'selected', 'removeAble', 'editAble'],
    data () {
      return {
        label: this.label,
        selected: this.selected,
        removeAble: this.removeAble,
        editAble: this.editAble
      }
    }
  }
</script>

<style>
</style>