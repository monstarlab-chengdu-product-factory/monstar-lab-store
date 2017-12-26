import axios from 'axios'
export class MarketingService {
  constructor () {
    this.url = '/api/commercials'
  }
  getCommercials () {
    return axios.get(this.url)
      .then((response) => response.data)
  }
}
