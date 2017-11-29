import Vue from 'vue'
import ProductName from '@/components/product/ProductName'

function getProductName (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}
describe('ProductName.vue', () => {
  it('title is correct', () => {
    expect(getProductName(ProductName, {
      name: '第一步:项目类型'
    })).to.equal('第一步:项目类型')
    expect(getProductName(ProductName, {
      name: '第二步:功能评估'
    })).to.equal('第二步:功能评估')
  })
})
