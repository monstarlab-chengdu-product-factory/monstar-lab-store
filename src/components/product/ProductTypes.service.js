import axios from 'axios'
export class ProductTypesService {
  constructor () {
    this.productTypesUrl = '/api/productTypes'
  }

  getProductTypes () {
    return axios.get(this.productTypesUrl)
      .then((response) => response.data)
    // .catch(console.log('error'))
  }
}
