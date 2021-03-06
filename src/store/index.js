import Vue from 'vue';
import Vuex from 'vuex';
import proxy from './proxy';
import list from './list';
import modal from './modal';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    proxy,
    list,
    modal,
  },
});