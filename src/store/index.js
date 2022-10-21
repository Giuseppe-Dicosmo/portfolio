import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dark: false,
    navbarIcon: true,
  },
  getters: {},
  mutations: {
    darkMode: (state) => {
      state.dark = !state.dark;
    },
  },
  actions: {},
  modules: {},
});
