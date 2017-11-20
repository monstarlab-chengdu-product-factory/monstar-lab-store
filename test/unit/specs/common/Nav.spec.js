import Vue from 'vue'
import vueRouter from 'vue-router'
import Router from '../../../../src/router/index'
import data from '../../../../data.json'
import Nav from '@/components/common/Nav'
Vue.use(vueRouter)
const router = Router

describe('Nav.vue', () => {
  const Constructor = Vue.extend(Nav)
  const vm = new Constructor({
    router: router
  }).$mount()
  it('get correct api data', () => {
    Vue.nextTick(() => {
      const defaultData = Nav.data()
      expect(defaultData.items)
        .to.equal(data.navs)
    })
  })
  it('renders first nav list correctly', () => {
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.list-item').textContent)
        .to.equal('首页')
    })
  })
})
