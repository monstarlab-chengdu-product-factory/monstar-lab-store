export class Products {
  constructor () {
    this.productUrl = '/api/products'
  }
  getProducts (context) {
    return context.$http.get(this.productUrl)
      .then((response) => response.data)
    // .catch(console.log('error'))
  }
}
