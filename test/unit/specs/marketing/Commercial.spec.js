import Vue from 'vue'
import Commercial from '@/components/marketing/Commercial'

describe('Commercial.vue', () => {
  it('should render button text contents', () => {
    const Constructor = Vue.extend(Commercial)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.test').textContent)
      .to.equal('立即报价')
  })
})
