import axios from 'axios'
export class ProductService {
  constructor () {
    this.productTypesUrl = '/api/producttypes'
    this.productsUrl = '/api/products'
  }

  getProductTypes () {
    return axios.get(this.productTypesUrl)
      .then((response) => response.data)
    // .catch(console.log('error'))
  }

  getProducts () {
    return axios.get(this.productUrl)
      .then((response) => response.data)
    // .catch(console.log('error'))
  }
}
