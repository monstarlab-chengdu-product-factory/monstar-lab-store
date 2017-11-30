import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  strict: debug,
  // modules: {
  //   products
  // },
  state: {
    count: 1
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => {
      if (state.count > 1) {
        state.count--
      }
    }
  }
})
