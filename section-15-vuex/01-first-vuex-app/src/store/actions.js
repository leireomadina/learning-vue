export default {
  // setAuth(context) {
  //   context.commit('setAuth');
  // }
  login(context) {
    context.commit('setAuth', {isAuth: true});
  },
  logout(context) {
    context.commit('setAuth', {isAuth: false});
  }
}