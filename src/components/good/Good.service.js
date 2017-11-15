export function getProductList (context) {
  return context.$http.get('/api/products')
    .then((response) => response.data)
}
