import * as api from "../api/api";

const actions = {
  LOGIN({commit}, {email, password}) {
    console.log('Login actions');
    api.login({email: email, password: password})
    .then(res => {
      console.log(res.data.token);
      commit('SET_LOGIN_RESULT', res.data.token)
    });
  },
  REGISTER_ARTICLE(_, article) {
    return api.article.REGISTER(article)
  },
  GET_ARTICLE(_, id){
    return api.article.FETCH(id);
  },
  GET_ARTICLES({commit}, query) {
    return api.article.FETCH_LIST(query)
        .then(res => {
          commit('SET_ARTICLES', res.data.content)
        });
  },
  REGISTER_REPLY({commit}, id,reply) {
    return api.reply.REGISTER(id,reply)
    .then(() => {
      commit('')
    });
  }
}

export default actions
