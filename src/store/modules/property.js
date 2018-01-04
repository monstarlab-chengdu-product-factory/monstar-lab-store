/**
 * Created by christy on 2018/1/3.
 */
import * as types from '../mutation-types'
const state = {
  added: []
}
const actions = {}
const getters = {
  allAdded: state => state.added
}
const mutations = {
  [types.ADD_TO_CART] (state, {id}) {
    state.added.push({
      id
    })
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
