import axios from 'axios'
import state from "../store/state";

const DOMAIN = 'http://www.negyahu.ga'
// const DOMAIN = 'http://localhost:8001'

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data);
}

export const login = ({email, password}) => request('post', '/api/login',
    {email: email, password: password});

export const security = {

  login({email, password}) {
   return  request('post', '/api/login',
        {email: email, password: password})
  },
  logout(){
    state.token = null
    delete localStorage.token
    setAuthInHeader(null)
  }
}

export const check = {
  email(email) {
    return request('get', `/api/check-email?email=${email}`, {})
  },
  nickname(nickname) {
    return request('get', '/api/login-nickname', {nickname: nickname})
  }
}

export const account = {
  checkEmail(email) {
    return request('get', '/check/email', {email: email})
  }
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}`
      : null;
}


