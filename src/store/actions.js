import * as api from "../api/api";

const actions = {
    LOGIN({commit},{email, password}) {
      console.log('actions');
      api.login({email:email, password: password})
      .then( data => {
        commit('SET_LOGIN_RESULT',data.token)
      })
    }
}

export default actions
