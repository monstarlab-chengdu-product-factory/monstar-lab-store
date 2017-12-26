const _commercials = [
  {
    'id': 1,
    'name': 'test-commercial-1',
    'brief': '这是brief这是brief这是brief',
    'coverUrl': '/static/img/logo.svg'
  },
  {
    'id': 2,
    'name': 'test-commercial-2',
    'brief': '这是brief这是brief这是brief',
    'coverUrl': '/static/img/logo.svg'
  }
]

export default {
  getCommercials (cb) {
    setTimeout(() => cb(_commercials), 100)
  }
}
