import * as types from '../mutation-types'
import TypeService from '../../api/type'
const state = {
  all: [],
  addedOne: []
}
const actions = {
  getAllTypes ({commit}) {
    TypeService.getTypes(type => {
      commit(types.RECEIVE_TYPES, {type})
    })
  }
}
const mutations = {
  [types.ADD_TO_CART] (state, {id}) {
    state.all.find(t => t.id === id)
  },
  [types.RECEIVE_TYPES] (state, {type}) {
    state.all = type
  }
}
const getters = {
  allTypes: state => state.all,
  allAdds: state => state.addedOne
}
export default {
  state,
  getters,
  actions,
  mutations
}
