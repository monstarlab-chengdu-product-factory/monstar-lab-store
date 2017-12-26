import Vue from 'vue'
import ProductList from '@/components/product/ProductList'
import data from '../../../../data.json'

describe('ProductList.vue', () => {
  // const Constructor = Vue.extend(ProductList)
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
})
