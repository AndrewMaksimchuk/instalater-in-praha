export const state = () => ({
  isShowHeader: true,
  isShowModalWindow: false,
  imgInModal: null
});

export const mutations = {
  showModalWindow(state, imgSrc) {
    state.isShowModalWindow = true;
    state.imgInModal = imgSrc;
    this.commit("hideHeader");
  },
  hideModalWindow(state) {
    state.isShowModalWindow = false;
    this.commit("showHeader");
  },
  showHeader(state) {
    state.isShowHeader = true;
  },
  hideHeader(state) {
    state.isShowHeader = false;
  }
};

export const getters = {
  isShowHeader: state => state.isShowHeader,
  isShowModalWindow: state => state.isShowModalWindow,
  imgInModal: state => state.imgInModal
};
