export const cartTypes = state => {
  return state.types.added.map((id, name) => {
    const type = state.productTypes.all.find(t => t.id === id)
    return {
      name: type.name
    }
  })
}
