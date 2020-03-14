import Vue from 'vue';
import Vuex from 'vuex';

import rickRolls from './rickRolls';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rickRolls: rickRolls.map((r, index) => {
      r.id = index + 1;
      return r;
    }),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
