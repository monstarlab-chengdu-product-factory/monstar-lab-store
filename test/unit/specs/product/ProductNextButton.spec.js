import Vue from 'vue'
import ProductNextButton from '@/components/product/ProductNextButton'
describe('ProductNextButton.vue', () => {
  it('ProductNextButton component is correct', () => {
    const Constructor = Vue.extend(ProductNextButton)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('button'))
  })
})
