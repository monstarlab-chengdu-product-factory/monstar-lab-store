export const cartProducts = state => {
  return state.property.added.map(({id}) => {
    const product = state.type.all.find(p => p.id === id)
    return {
      id: product.id
    }
  })
}
