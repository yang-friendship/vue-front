import jwt_decode from "jwt-decode";
import axios from "axios";

const mutations = {
  SET_LOGIN_RESULT(state, token) {
    console.log("setLoginResult:"+ token);

    if(!token) return;
    console.log(token);
    let decoded = jwt_decode(token);
    console.log(decoded);
    state.user.id = decoded.id;
    state.user.role = decoded.auth;
    state.user.email = decoded.aud;
    state.user.nickname = decoded.nickname;
    state.token = token;

    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = token ? token : null;
  },

  SET_ARTICLE(state, article) {
    state.article = article;
  },
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
  SET_ACCOUNT(state, account) {
    state.account = account
  }

}

export default mutations
