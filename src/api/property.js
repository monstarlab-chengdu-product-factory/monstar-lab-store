/**
 * Mocking client-server processing
 */
import property from './property.json'
const _property = property
export default {
  getProperties (cb) {
    setTimeout(() => cb(_property), 100)
  },
  getPropertiesByFunctionId (functionId) {
    return property.filter((v) => v.functionTypeId === functionId)
  }
}
