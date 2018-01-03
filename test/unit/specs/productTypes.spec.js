// const actionsInjector = require('inject-loader!./../../../../src/store/modules/productTypes')
// const _productTypes = [
//   {
//     'id': 4,
//     'name': 'IOS原生应用',
//     'icon': '/static/img/product.jpg',
//     'brief': '直播,电商,社交等主流平台',
//     'discription': 'sdsfdsfdsf',
//     'functions': [
//       {
//         'id': 41,
//         'name': '基本功能'
//       }
//     ]
//   }
// ]
//
// const actions = actionsInjector({
//   '../../api/productTypes': {
//     getProductTypes (cb) {
//       setTimeout(() => {
//         cb(_productTypes)
//       }, 100)
//     }
//   }
// })
//
// const testAction = (action, args, state, expectedMutations, done) => {}
//
// // //mock commit
// // const commit = (type, payload) => {
// //
// // }
// describe('actions', () => {
//   it('getAllProductTypes', done => {
//     testAction(actions.getAllProductTypes, [], {}, [
//       {
//         type: 'RECEIVE_PRODUCTTYPES',
//         payload: {
//           'id': 4,
//           'name': 'IOS原生应用',
//           'icon': '/static/img/product.jpg',
//           'brief': '直播,电商,社交等主流平台',
//           'discription': 'sdsfdsfdsf',
//           'functions': [
//             {
//               'id': 41,
//               'name': '基本功能'
//             }
//           ]
//         }
//       }
//     ], done)
//   })
// })
//
