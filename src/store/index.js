import Vue from "vue";
import Vuex from "vuex";
import moviesStore from "./modules/moviesStore";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    moviesStore,
  },
});

store.dispatch("loadMovies");

export default store;
