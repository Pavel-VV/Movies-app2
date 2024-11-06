import Vue from "vue";
import Vuex from "vuex";
import moviesStore from "./modules/moviesStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    moviesStore,
  },
});
