import Vue from 'vue'
import ProductTypeLIst from '@/components/product/ProductTypeLIst'
describe('ProductTypeLIst.vue', () => {
  const Constructor = Vue.extend(ProductTypeLIst)
  const vm = new Constructor().$mount()
  it('ProductTypeLIst component is correct', () => {
    expect(vm.$el.getElementsByTagName('li')).to.have.length
  })
  it('ProductTypeLIst has img', () => {
    expect(vm.$el.getElementsByTagName('img')).to.be.ok
  })
  // it('ProductTypeLIst has a click function', () => {
  //   expect(typeof vm.methods.on_click).to.be.a('function')
  // })
})
