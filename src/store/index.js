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
    list: [],
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
    updateList(state, obj) {
      let foundIndex = state.list.findIndex(({ title }) => title === obj.title)
      // update existing item
      if (foundIndex > -1) {
        state.list[foundIndex] = { ...state.list[foundIndex], ...obj};
      // create item
      } else {
        state.list.push(obj);
      }
    },
  },
})
