import Vue from 'vue'
import Vuex from 'vuex'
import type from './modules/type.js'
import property from './modules/property.js'
import * as getters from './getters'
import * as actions from './actions'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    type,
    property
  },
  strict: debug
})
