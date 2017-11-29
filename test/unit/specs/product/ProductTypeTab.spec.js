import Vue from 'vue'
import ProductTypeTab from '@/components/product/ProductTypeTab'
import vueRouter from 'vue-router'
import data from '../../../../data.json'
Vue.use(vueRouter)
describe('ProductTypeTab.vue', () => {
  it('it has the virtual data', () => {
    Vue.nextTick(() => {
      const defaultData = ProductTypeTab.data()
      expect(defaultData.productTypes)
        .to.equal(data.productTypes)
    })
  })
})
