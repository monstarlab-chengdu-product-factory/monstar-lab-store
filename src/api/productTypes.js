/**
 * Mocking client-server processing
 */

const _productTypes = [
  {
    'id': 1,
    'name': 'web网站',
    'icon': '/static/img/product.jpg',
    'brief': '直播,电商,社交等主流平台',
    'discription': '图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。',
    'units': [
      {
        'id': 1,
        'name': '基本功能'
      },
      {
        'id': 2,
        'name': '高级功能'
      },
      {
        'id': 3,
        'name': '电商功能'
      },
      {
        'id': 4,
        'name': '社交功能'
      }
    ]
  },
  {
    'id': 2,
    'name': '微信',
    'icon': '/static/img/product.jpg',
    'brief': '公众号,企业号,小程序',
    'discription': 'Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。',
    'units': [
      {
        'id': 21,
        'name': '聊天'
      },
      {
        'id': 22,
        'name': '朋友圈'
      },
      {
        'id': 23,
        'name': '支付'
      },
      {
        'id': 24,
        'name': '小程序'
      },
      {
        'id': 25,
        'name': '交友'
      }
    ]
  },
  {
    'id': 3,
    'name': '后台管理',
    'icon': '/static/img/product.jpg',
    'brief': '直播,电商,社交等主流平台',
    'discription': 'Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。',
    'functions': [
      {
        'id': 31,
        'name': '基本功能'
      },
      {
        'id': 32,
        'name': '高级功能'
      },
      {
        'id': 33,
        'name': '电商功能'
      },
      {
        'id': 34,
        'name': '社交功能'
      },
      {
        'id': 35,
        'name': '其它功能'
      }
    ]
  },
  {
    'id': 4,
    'name': 'IOS',
    'icon': '/static/img/product.jpg',
    'brief': '直播,电商,社交等主流平台',
    'discription': 'Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。',
    'functions': [
      {
        'id': 41,
        'name': '基本功能'
      },
      {
        'id': 42,
        'name': '高级功能'
      },
      {
        'id': 36,
        'name': '电商功能'
      },
      {
        'id': 43,
        'name': '社交功能'
      },
      {
        'id': 44,
        'name': '其它功能'
      }
    ]
  }
]

export default {
  getProductTypes (cb) {
    setTimeout(() =>
      cb(_productTypes), 100)
  }

}
