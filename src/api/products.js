/**
 * Mocking client-server processing
 */
import products from './products.json'
const _products = products
export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  }
}
