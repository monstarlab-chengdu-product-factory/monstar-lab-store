/**
 * Mocking client-server processing
 */
import products from './products.json'
const _products = products

var getProductsArr = function (unitId) {
  let products = []
  for (let p of _products) {
    if (p.unitId === unitId) {
      products.push(p)
    }
  }
  return products
}

export default {
  async getProducts (unitId, cb) {
    await
    cb(getProductsArr(unitId))
  }
}
