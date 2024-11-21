import mutations from "@/store/mutations";

const { PUSH_MESSAGE_TOAST } = mutations;

const notificationStore = {
  state: {
    messagePool: [],
  },
  getters: {
    getMessagePool: ({ messagePool }) => messagePool[messagePool.length - 1],
  },
  mutations: {
    [PUSH_MESSAGE_TOAST](state, msg) {
      state.messagePool.push(msg);
    },
  },
  actions: {
    pushMessageNotification({ commit }, msg) {
      commit(PUSH_MESSAGE_TOAST, msg);
    },
  },
};

export default notificationStore;
