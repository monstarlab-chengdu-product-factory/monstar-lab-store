import Vue from 'vue'
import ProductTypeList from '@/components/product/ProductTypeList'
describe('ProductTypeList.vue', () => {
  const Constructor = Vue.extend(ProductTypeList)
  const vm = new Constructor().$mount()
  it('ProductTypeList component is correct', () => {
    expect(vm.$el.querySelector('li'))
  })
  it('ProductTypeList has img', () => {
    expect(vm.$el.querySelector('img'))
  })
  // it('ProductTypeLIst has a click function', () => {
  //   expect(typeof vm.methods.on_click).to.be.a('function')
  // })
})
