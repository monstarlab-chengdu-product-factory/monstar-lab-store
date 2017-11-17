import Vue from 'vue'
import ProductTypeLIst from '@/components/product/ProductTypeLIst'
describe('ProductTypeLIst.vue', () => {
  it('ProductTypeLIst component is correct', () => {
    const Constructor = Vue.extend(ProductTypeLIst)
    const vm = new Constructor().$mount()
    expect(vm.$el.getElementsByTagName('li')).to.have.length
  })
})
