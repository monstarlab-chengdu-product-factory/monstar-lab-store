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
    service.getProductTypes(productTypes => {
      commit(types.RECEIVE_PRODUCTTYPES, {productTypes})
    })
  },
  commitProductTypesChange ({commit}, items) {
    // TODO:判断最小list长为1
    commit(types.COMMIT_PRODUCTTYPES_CHANGE, {items})
  }
}

// mutations
export const mutations = {
  [types.RECEIVE_PRODUCTTYPES]: (state, {productTypes}) => {
    state.all = productTypes
  },

  toggleTypeSelected: (state, item) => {
    item.active = !item.active
    item.show = item.active
  },
  toggleTypeShow: (item) => {
    item.show = !item.show
    console.log(item)
  },
  [types.COMMIT_PRODUCTTYPES_CHANGE]: (state, {items}) => {
    for (let i in items) {
      items[i].active = items[i].show
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
