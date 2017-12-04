import Vue from 'vue'
import ProductList from '@/components/product/ProductList'
import data from '../../../../data.json'

describe('ProductList.vue', () => {
  const Constructor = Vue.extend(ProductList)
  const vm = new Constructor().$mount()
  it('应该有h1的标题', () => {
    expect(vm.$el.querySelector('h1'))
  })
  it('组建加载成功后标题应该是文字第二步: 功能评估', () => {
    expect(vm.title).to.equal('第二步: 功能评估')
  })
  it('it has the virtual property data', () => {
    Vue.nextTick(() => {
      const defaultData = ProductList.data()
      expect(defaultData.property)
        .to.equal(data.property)
    })
  })
  it('it has the virtual products data', () => {
    Vue.nextTick(() => {
      const defaultData = ProductList.data()
      expect(defaultData.products)
        .to.equal(data.products)
    })
  })
  it('table has name "模块"', () => {
    expect(vm.table[0].name).to.equal('模块')
  })
})
