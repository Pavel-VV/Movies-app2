import Vue from "vue";
import Vuex from "vuex";
import moviesStore from "./modules/moviesStore";
import moviesLoader from "./modules/moviesLoader";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    moviesStore,
    moviesLoader,
  },
});

// store.dispatch("loadMovies");

export default store;
