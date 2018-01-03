// import service from '../../api/productTypes'
import * as types from '../mutation-types'

const state = {
  added: [],
  checkoutStatus: null
}

const getters = {
  checkoutStatus: state => state.checkoutStatus
}

const actions = {
  checkout ({commit, state}, productTypes) {
    const savedCartItems = [...state.added]
    console.log(savedCartItems)
    commit(types.CHECKOUT_REQUEST)
    // service.buyProducts(
    //   products,
    //   () => commit(types.CHECKOUT_SUCCESS),
    //   () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    // )
  }
}

const mutations = {
  [types.ADD_TO_CART] (state, {id}) {
    state.checkoutStatus = null
    const record = state.added.find(p => p.id === id)
    console.log(record)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
