const state = () => {
  return {
    proxy: {
      title: '',
      desc: '',
      date: null,
      dueDate: null,
      priority: 0,
      checked: false,
    },
  }
}

const mutations = {
  updateProxy(state, item) {
    state.proxy = { ...state.proxy, ...item };
  },
  resetProxy(state) {
    state.proxy = {
      title: '',
      desc: '',
      date: null,
      dueDate: null,
      priority: 0,
      checked: false,
    };
  },
}

export default {
  state,
  mutations,
};