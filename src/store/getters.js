
const getters =  {
  isLogin(state) {
    return !!state.token
  },
  getUserId(state) {
    return state.user.id;
  }
}
export default getters
