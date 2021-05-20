import axios from 'axios'
import state from "../store/state";
// const DOMAIN = 'http://www.negyahu.ga'
const DOMAIN = 'http://localhost:8001'


const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  });
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

export const article = {

  REGISTER(article) {
    return request('post', '/api/articles'
        , article)
  },
  FETCH(id){
    return request('get', `/api/articles/${id}`)
  },
  FETCH_LIST(query){
    return request('get',`/api/articles?type=${query.type}&keyword=${query.keyword}`)
  },
  DELETE(id){
    return request('delete', `/api/articles/${id}`);
  },
}

export const reply = {
  REGISTER(id,reply) {
    return request('post', `/api/articles/${id}/replay`,{ reply})
  }
}

