import mutation from "@/store/mutations";

const { TOGGLE_LOADER } = mutation;

const loaderStore = {
  state: {
    isShowLoader: false,
  },
  getters: {
    isShowLoader: ({ isShowLoader }) => isShowLoader,
  },
  mutations: {
    [TOGGLE_LOADER](state, boolean) {
      state.isShowLoader = boolean;
    },
  },
  actions: {
    changeLoader({ commit }, boolean) {
      commit("TOGGLE_LOADER", boolean);
    },
  },
};

export default loaderStore;
