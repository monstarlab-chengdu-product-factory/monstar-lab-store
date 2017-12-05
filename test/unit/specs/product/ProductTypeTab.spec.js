import Vue from 'vue'
import ProductTypeTab from '@/components/product/ProductTypeTab'
import vueRouter from 'vue-router'
import data from '../../../../data.json'
Vue.use(vueRouter)
describe('ProductTypeTab.vue', () => {
  const Constructor = Vue.extend(ProductTypeTab)
  const vm = new Constructor().$mount()
  it('it has the virtual data', () => {
    Vue.nextTick(() => {
      const defaultData = ProductTypeTab.data()
      expect(defaultData.productTypes)
        .to.equal(data.productTypes)
    })
  })
  it('change改变了', () => {
    vm.change()
    expect(vm.alternative).to.equal(true)
    expect(vm.$el.querySelector('.change').innerText).to.equal('修改平台')
  })
})
