import axios from 'axios'
export class NavService {
  constructor () {
    this.url = '/api/navs'
  }
  getNavs () {
    return axios.get(this.url)
      .then(response => response.data)
      .catch(err => console.log(err))
  }
}
