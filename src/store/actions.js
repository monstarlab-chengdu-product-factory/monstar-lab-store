import * as types from './mutation-types'
export const addToCart = ({commit}, type) => {
  commit(types.ADD_TO_CART, {
    id: type.id
  })
}
