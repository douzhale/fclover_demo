const mutations = {
  changeSlideIndex(state,index) {
    state.slideIndex = index;
  },
  getModalState(state,isShow) {
    state.hasModal = isShow;
  }
}

export default mutations;