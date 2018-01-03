import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import * as getters from './getters'
import productTypes from './modules/productTypes'
// import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  getters,
  modules: {
    productTypes,
    cart
  },
  strict: debug
})
