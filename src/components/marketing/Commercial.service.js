import axios from 'axios'
export class CommercialService {
  constructor () {
    this.url = '/api/commercials'
  }
  getCommercials () {
    return axios.get(this.url)
      .then((response) => response.data)
    // .catch(console.log('error'))
  }
}
