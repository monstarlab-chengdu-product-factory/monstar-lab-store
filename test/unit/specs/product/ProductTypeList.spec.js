import Vue from 'vue'
import ProductTypeList from '@/components/product/ProductTypeList'
describe('ProductTypeList.vue', () => {
  const Constructor = Vue.extend(ProductTypeList)
  const vm = new Constructor().$mount()
  it('ProductTypeList component is correct', () => {
    expect(vm.$el.getElementsByTagName('li')).to.have.length
  })
  it('ProductTypeList has img', () => {
    expect(vm.$el.getElementsByTagName('img')).to.be.ok
  })
  // it('ProductTypeLIst has a click function', () => {
  //   expect(typeof vm.methods.on_click).to.be.a('function')
  // })
})
