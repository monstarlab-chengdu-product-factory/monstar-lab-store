import service from '../../api/productTypes'
import * as types from '../mutation-types'

// initial state
const state = {
  allTypes: [],
  activeTypeId: 0,
  activeUnitId: 0
}

// getters
const getters = {
  allProductTypes: state => state.allTypes,
  activeUnitId: state => state.activeUnitId
}

// actions
const actions = {
  getAllProductTypes ({commit}) {
    service.getProductTypes(productTypes => {
      commit(types.RECEIVE_PRODUCTTYPES, {productTypes})
    })
  },
  commitProductTypesChange ({commit}, items) {
    commit(types.COMMIT_PRODUCTTYPES_CHANGE, {items})
  }
  // TODO: If first active type changes, renders unit items
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTTYPES]: (state, {productTypes}) => {
    state.allTypes = productTypes
  },
  [types.COMMIT_PRODUCTTYPES_CHANGE]: (state, {items}) => {
    for (let i in items) {
      items[i].active = items[i].show
    }
  },
  toggleTypeSelected: (state, item) => {
    item.show = item.active = !item.active
  },
  toggleTypeShow: (state, item) => {
    if (!item.active) {
      item.show = false
    }
    item.show = !item.show
  },
  unitSelected: (state, unitId) => {
    state.activeUnitId = unitId
    console.log(state.activeUnitId)
  },
  typeSelected: (state, typeId) => {
    state.avtiveTypeId = typeId
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
