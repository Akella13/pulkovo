const state = () => {
  return {
    show: false,
  };
}

const mutations = {
  toggleModal(state) {
    state.show = !state.show;
  }
}

export default {
  state,
  mutations,
};