export class ProductTypesService {
  constructor () {
    this.productTypesUrl = '/api/productTypes'
  }
  getProductTypes (context) {
    return context.$http.get(this.productTypesUrl)
      .then((response) => response.data)
    // .catch(console.log('error'))
  }
}
