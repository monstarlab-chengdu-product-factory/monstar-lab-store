export class CommercialService {
  constructor () {
    this.commercialUrl = '/api/commercials'
  }
  getCommercials (context) {
    return context.$http.get(this.commercialUrl)
      .then((response) => response.data)
    // .catch(console.log('error'))
  }
}
