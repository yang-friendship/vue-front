import axios from 'axios'
// import router from '../router'

const DOMAIN = 'http://localhost:8080'
// const UNAUTHORIZED = 401
// const onUnauthorized = () => {
//   router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`)
// }

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data);
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `${token}` : null;
}

export const test = {

  send() {
    return request('get', '/test');
  }

}


