export default {
  increment(context) {
    // we can run asynchronous code inside actions
    setTimeout(function() {
      context.commit('increment');
    }, 2000);
  },
  increase(context, payload) {
    // console.log(context);
    context.commit('increase', payload);
  }
}