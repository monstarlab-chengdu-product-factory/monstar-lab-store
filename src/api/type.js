/**
 * Created by christy on 2018/1/3.
 */
import types from './type.json'

export default {
  getTypes (cb) {
    setTimeout(() => cb(types), 100)
  }
}
