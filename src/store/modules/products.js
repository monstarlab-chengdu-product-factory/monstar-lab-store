import service from '../../api/products'
import * as types from '../mutation-types'

const state = {
  products: [],
  pointsCount: 30
}

const getters = {
  products: state => state.products
}

const actions = {
  getProducts ({commit}, unitId) {
    service.getProducts(unitId, products => {
      commit(types.RECEIVE_PRODUCTS, {
        products: products,
        unitId: unitId
      })
    })
  }
}

const mutations = {
  [types.RECEIVE_PRODUCTS]: (state, payload) => {
    state.products.push({[payload.unitId]: payload.products})
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
