import * as types from './mutation-types'

export const addToCart = ({commit}, ProductType) => {
  commit(types.ADD_TO_CART, {
    id: ProductType.id
  })
}
