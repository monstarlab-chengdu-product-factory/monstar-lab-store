import Vue from 'vue'
import vueRouter from 'vue-router'
import Router from '../../../../src/router/index'
// import data from '../../../../data.json'
import Commercial from '@/components/marketing/Commercial'

Vue.use(vueRouter)
const router = Router

describe('Commercial.vue', () => {
  const Constructor = Vue.extend(Commercial)
  const vm = new Constructor({
    router: router
  }).$mount()
  it('renders button text correctly', () => {
    Vue.nextTick(() => {
      const defaultData = Commercial.data()
      expect(vm.$el.querySelector('.text-con button').textContent)
        .to.equal(defaultData.buttonText)
    })
  })
})
