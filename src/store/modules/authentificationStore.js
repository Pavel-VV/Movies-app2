// import axios from "@/plugins/axios";
import mutations from "@/store/mutations";
import regExp from "@/helpers/validate";

const { TOGGLE_EMAIL, TOGGLE_PASSWORD, TOGGLE_AUTH } = mutations;

const authentificationStore = {
  namespaced: true,
  state: {
    isEmail: false,
    isPassword: false,
    regExp: regExp,
    isAuth: false,
  },
  getters: {
    getEmailStatus: ({ isEmail }) => isEmail,
    getPasswordStatus: ({ isPassword }) => isPassword,
    getAuth: ({ isAuth }) => isAuth,
  },
  mutations: {
    [TOGGLE_EMAIL](state, boolean) {
      state.isEmail = boolean;
    },
    [TOGGLE_PASSWORD](state, boolean) {
      state.isPassword = boolean;
    },
    [TOGGLE_AUTH](state, boolean) {
      state.isAuth = boolean;
    },
  },
  actions: {
    toggleLoginStatus({ commit }, bool) {
      commit(TOGGLE_EMAIL, bool);
    },
    validateForm({ commit, state, dispatch }, formInput) {
      // const res = state.regExp.email.test(formInput.login);
      try {
        const resEmail = formInput.email.length > 5;
        commit(TOGGLE_EMAIL, resEmail);
        const resPassword = state.regExp.password.test(formInput.password);
        commit(TOGGLE_PASSWORD, resPassword);
        if (resEmail && resPassword) {
          commit(TOGGLE_AUTH, true);
          //добавить запрос на аутентификацию, проверка введенного логина и пароля
          return;
        }
        console.log("false");
        throw new Error("Authentification error");
      } catch (err) {
        dispatch(
          "pushMessageNotification",
          {
            msg: err.message,
            variant: "danger",
            title: "Error",
          },
          { root: true }
        );
      } finally {
        // dispatch("changeLoader", false, { root: true });
        console.log("fine");
      }
    },
  },
};

export default authentificationStore;
