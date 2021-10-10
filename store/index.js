export const state = () => ({
  isShowModalWindow: false,
  imgInModal: null
});

export const mutations = {
  showModalWindow(state, imgSrc) {
    state.isShowModalWindow = true;
    state.imgInModal = imgSrc;
  },
  hideModalWindow(state) {
    state.isShowModalWindow = false;
  }
};

export const getters = {
  isShowModalWindow: state => state.isShowModalWindow,
  imgInModal: state => state.imgInModal
};
