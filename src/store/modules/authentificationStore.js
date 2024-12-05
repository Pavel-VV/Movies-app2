// import axios from "@/plugins/axios";
import mutations from "@/store/mutations";

const { TOGGLE_LOGIN } = mutations;

const authentificationStore = {
  namespaced: true,
  state: {
    isLogin: false,
  },
  getters: {
    getLoginStatus: ({ isLogin }) => isLogin,
  },
  mutations: {
    [TOGGLE_LOGIN](state, boolean) {
      state.isLogin = boolean;
    },
  },
  actions: {
    toggleLoginStatus({ commit }, bool) {
      commit(TOGGLE_LOGIN, bool);
    },
  },
};

export default authentificationStore;
