import Vue from 'vue'
import vueRouter from 'vue-router'
import Router from '../../../src/router/index'
import Nav from '@/components/common/Nav'
Vue.use(vueRouter)
const router = Router

describe('Nav.vue', () => {
  const Constructor = Vue.extend(Nav)
  const vm = new Constructor({
    router: router
  }).$mount()

  it('renders first nav item is index', () => {
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.list-item').textContent)
        .to.equal('首页')
    })
  })
})
