import axios from 'axios'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data);
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

export const board = {
  fetch(id) {
    return id ? request('get', `/boards/${id}`) :request('get', '/boards')
  },
  create(title) {
    return request('post', '/boards', {title})
  },
  destroy(id){
    return request('delete',`/boards/${id}`,{id})
  },
  update(id, payload) {
    return request('put',`/boards/${id}`,payload)
  }
}
export const auth = {
  login(email, password) {
    return request('post', '/login', {email, password})
  }
}

export const card = {

  create(title, listId,pos) {
    return request('post','/cards',{title,listId,pos})
  },
  fetch(id) {
    return request('get',`/cards/${id}`)
  },
  update(id, payload) {
    return request('put' , `/cards/${id}`, payload)
  },
  destroy(id) {
    return request('delete', `/cards/${id}`)
  }
}

export const list = {

  create(payload) {
    return request('post','/lists', payload)
  },
  update(id,payload) {
    return request('put' , `/lists/${id}`, payload)
  }

}


