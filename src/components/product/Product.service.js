import axios from 'axios'
export class ProductService {
  constructor () {
    this.productUrl = '../api/type'
  }
  getProducts () {
    return axios.get(this.productUrl)
      .then((response) => response.data)
    // .catch(console.log('error'))
  }
}
