const actions = {
  changeSlideIndex({commit},index) {
    commit('changeSlideIndex',index);
  },
  getModalState({commit},isShow) {
    commit('getModalState',isShow)
  }
}

export default actions;