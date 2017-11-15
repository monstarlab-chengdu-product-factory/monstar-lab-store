const productUrl = '/api/products'

export function getproducts (context) {
  return context.$http.get(productUrl)
    .then((response) => response.data)
  // .catch(console.log('error'))
}
export const itemHeight = (item) => {
  const {height, largeSize, smallSize} = item
  return height > 256 ? largeSize : smallSize
}
export const getproduct = ({context}) => {
  const {self, id} = context
  return self.$http.get(`${productUrl}/${id}`)
    .then((response) => response.data)
  // .catch(console.log('error'))
}
