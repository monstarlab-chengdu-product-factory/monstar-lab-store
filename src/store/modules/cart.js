import _ from 'lodash'
import * as types from '../mutation-types'

const state = {
  typeAdded: []
}

const getters = {
  typeCart: state => state.typeAdded
}

const actions = {}

const mutations = {
  [types.TOGGLE_TYPE_TO_CART] (state, {id}) {
    const handleType = state.typeAdded.find(t => t.id === id)
    if (handleType) {
      let i = _.findIndex(state.typeAdded, {id: id})
      console.log(i)
      console.log(state.typeAdded)
    } else {
      state.typeAdded.push({
        id
      })
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
