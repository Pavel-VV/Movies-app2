import Vue from "vue";
import Vuex from "vuex";
import moviesStore from "./modules/moviesStore";
import moviesLoader from "./modules/moviesLoader";
import notificationStore from "./modules/notificationStore";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    moviesStore,
    moviesLoader,
    notificationStore,
  },
});

// store.dispatch("loadMovies");

export default store;
