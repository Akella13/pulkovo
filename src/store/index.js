import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
    list: [
      {
        title: 'write app',
        desc: 'to-do list with descriptions',
        date: new Date(2021, 3, 25, 12, 0, 0),
        dueDate: new Date(2021, 3, 27, 12, 0, 0),
        priority: 3,
        checked: false,
      },
      {
        title: 'new to-dos',
        desc: 'come up with new list elements',
        date: new Date(2021, 3, 25, 12, 1, 0),
        dueDate: null,
        priority: 2,
        checked: false,
      },
    ],
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
        // hack: makes list reactive
        state.list = [ ...state.list ];
      // create item
      } else {
        state.list.push(obj);
      }
    },
    removeListItem(state, str) {
      state.list = state.list.filter(({ title }) => title !== str);
    },
    sortList(state, order) {
      state.list.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        // ascending = -1, descending = 1
        const multiplier = titleA < titleB ? -1 : 1;
        return order ? (-1) * multiplier : multiplier ;
      });
    },
    assignList(state, arr) {
      state.list = arr;
    },
  },
});