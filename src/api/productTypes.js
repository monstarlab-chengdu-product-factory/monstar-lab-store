/**
 * Mocking client-server processing
 */

import productTypes from './productTypes.json'
const _productTypes = productTypes
export default {
  getProductTypes (cb) {
    setTimeout(() =>
      cb(_productTypes), 100)
  }
}
