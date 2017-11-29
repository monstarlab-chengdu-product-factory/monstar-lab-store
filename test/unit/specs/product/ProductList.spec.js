import Vue from 'vue'
import ProductList from '@/components/product/ProductList'

describe('ProductList.vue', () => {
  const Constructor = Vue.extend(ProductList)
  const vm = new Constructor().$mount()
  it('应该有h1的标题', () => {
    expect(vm.$el.querySelector('h1'))
  })
  it('h1的标题应该是文字第二步: 功能评估', () => {
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('第二步: 功能评估')
  })
  it('应该有product-list的容器', () => {
    expect(vm.$el.querySelector('.product-list'))
  })
  it('product-list内应该有product-type-tab的div', () => {
    expect(vm.$el.querySelector('.product-list div.product-type-tab'))
  })
  it('product-type-tab内应该有cat-selector的div', () => {
    expect(vm.$el.querySelector('.product-type-tab div.cat-selector'))
  })
  it('cat-selector内应该有selector-button-group', () => {
    expect(vm.$el.querySelector('.cat-selector div.selector-button-group'))
  })
  it('selector-button-group中应该有selector-button', () => {
    expect(vm.$el.querySelector('.cat-selector div.selector-button-group .selector-button'))
  })
  it('product-type-tab内应该有type-selector的div', () => {
    expect(vm.$el.querySelector('.product-type-tab div.type-selector'))
  })
  it('type-selector内应该有selector-button-group的div', () => {
    expect(vm.$el.querySelector('.type-selector div.selector-button-group'))
  })
})
