import axios from 'axios'
import config from '../Config.json'
axios.defaults.baseURL = `${config.requestURL}/api`
const instance = axios.create()

export function request(method, url, data) {
  return instance({ method, url, data })
}
export function requestAuth(method, url, data) {
  return axios({
    method,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token_seguridad'),
    },
    url,
    data,
  })
}
