import * as api from "../api/api";

const actions = {
  LOGIN({commit}, {email, password}) {
    return api.login({email: email, password: password})
    .then(res => {
      console.log("status:"+res.status);
      commit('SET_LOGIN_RESULT', res.data.token)
    });
  },
  REGISTER_ARTICLE(_, article) {
    return api.article.REGISTER(article)
  },
  GET_ARTICLE(_, id) {
    return api.article.FETCH(id);
  },
  GET_ARTICLES({commit}, query) {
    return api.article.FETCH_LIST(query)
    .then(res => {
      commit('SET_ARTICLES', res.data)
    });
  },
  REGISTER_REPLY({commit}, id, reply) {
    return api.reply.REGISTER(id, reply)
    .then(() => {
      commit('')
    });
  },
  GET_ACCOUNT({commit}, id) {
    return api.account.fetch(id)
    .then((res) => {
      console.log(res.data);
      commit('SET_ACCOUNT', res.data)
    })
  }
}

export default actions
