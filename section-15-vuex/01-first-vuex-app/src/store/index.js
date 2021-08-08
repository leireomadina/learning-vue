import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActionss from './actions.js';
import rootGetters from './getters';
import counterModule from './counter/index.js';

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: rootMutations,
  actions: rootActionss,
  getters: rootGetters 
});

export default store;