export class NavService {
  constructor () {
    this.navsUrl = '/api/navs'
  }
  getNavs (context) {
    return context.$http.get(this.navsUrl)
      .then((response) => response.data)
    // .catch(console.log('error'))
  }
}
