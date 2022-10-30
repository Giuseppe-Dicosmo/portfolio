import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dark: "",
    navbarIcon: true,
  },
  getters: {},
  mutations: {
    scrollTop: () => {
      window.scrollTo({ top: 0 });
    },

    darkMode(state) {
      const button = document.querySelector(".ball");
      const body = document.querySelector("#app");

      const useDark = window.matchMedia("(prefers-color-scheme: dark)");
      state.dark = useDark.matches;

      function toggleDarkMode(state, body, button) {
        body.classList.toggle("bg-dark", state);
        button.classList.toggle("active", state);
      }

      toggleDarkMode(useDark.matches, body, button);
    },
  },
  actions: {},
  modules: {},
});
