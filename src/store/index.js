import Vue from 'vue';
import Vuex from 'vuex';
import { differenceInCalendarDays } from 'date-fns';

import rolls from './rickRolls';

const rickRolls = rolls
  .map((r, index) => {
    r.id = index + 1;
    return r;
  })
  .sort((a, b) => a.date - b.date);

const daysSinceLastRickRoll = differenceInCalendarDays(
  new Date(),
  rickRolls[rickRolls.length - 1].date,
);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rickRolls,
    daysSinceLastRickRoll,
  },
  mutations: {},
  actions: {},
  modules: {},
});
