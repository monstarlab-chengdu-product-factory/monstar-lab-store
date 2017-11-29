import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import products from './modules/products'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export let store = new Vuex.Store({
  // actions,
  // getters,
  // modules: {
  //   products
  // },
  // strict: debug
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }

})
