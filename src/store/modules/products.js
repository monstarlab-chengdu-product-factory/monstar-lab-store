import _ from 'lodash'
import typesService from '../../api/productTypes'
import productsService from '../../api/products'
import * as types from '../mutation-types'

// initial state
const state = {
  allTypes: [],
  typeProducts: [],
  activeTypeAllUnits: [],

  activeTypeId: 0,
  activeUnitId: 0,
  pointsCount: 0
}

const getters = {
  allProductTypes: state => state.allTypes,
  allProducts: (state) => state.products,
  pointsCount: state => {
    return state.pointsCount
  }
}

const actions = {
  getAllProductTypes ({commit}) {
    typesService.getProductTypes(productTypes => {
      commit(types.RECEIVE_PRODUCTTYPES, {productTypes})
    })
  },
  commitProductTypesChange ({commit}, items) {
    commit(types.COMMIT_PRODUCTTYPES_CHANGE, {items})
  },
  // TODO: If first active type changes, renders unit items
  getProducts ({commit}, unitIds) {
    if (!unitIds) {
      // let typeId = state.activeTypeId
      let index = _.findIndex(state.activeTypeAllUnits, [state.activeTypeId])
      console.log(index)
      unitIds = state.activeTypeAllUnits[index]
      console.log(unitIds)
    }
    for (let id of unitIds) {
      productsService.getProducts(id, products => {
        commit(types.RECEIVE_PRODUCTS, {
          products: products,
          unitId: id
        })
      })
    }
  }
}

const mutations = {
  [types.RECEIVE_PRODUCTTYPES]: (state, {productTypes}) => {
    state.allTypes = productTypes

    for (let t of productTypes) {
      let unitIds = []
      for (let u of t.units) {
        unitIds.push(u.id)
      }
      state.activeTypeAllUnits.push({id: [t.id], data: unitIds})
    }
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
  },
  [types.RECEIVE_PRODUCTS]: (state, payload) => {
    state.products.push({
      typeId: [payload.unitId],
      units: payload.products
    })
    console.log(state.products)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
