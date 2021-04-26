import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    proxy: {
      title: '',
      desc: '',
      date: null,
      dueDate: null,
      priority: 0,
      checked: false,
    },
  },
  mutations: {
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
  },
})
