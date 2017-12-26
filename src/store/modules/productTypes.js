import _ from 'lodash'
import service from '../../api/productTypes'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProductTypes: state => state.all
}

// actions
const actions = {
  getAllProductTypes ({commit}) {
    // commit('REQUEST_PRODUCTS')
    service.getProductTypes(productTypes => {
      commit(types.RECEIVE_PRODUCTTYPES, {productTypes})
    })
  }
}

// mutations
export const mutations = {
  [types.RECEIVE_PRODUCTTYPES]: (state, {productTypes}) => {
    state.all = productTypes
  },

  toggleType (state, {item}) {
    item.active = !item.active
    console.log(state)
  },

  [types.ADD_NEW_UNIT]: (state, {id}) => {
    let index = _.findIndex(state.all, {id: id})
    console.log(index)
    // state.all[index].units.push({
    //   id: (index + 1) * 10 +
    // })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
