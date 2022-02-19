import Vue from 'vue';
const store = {};

store.state = () => ({
  minisLang: 'ru',
  minisTheme: 'dark',
  translate: {},
  minisList: {},
});

store.getters = {
  translate({ translate, minisLang }) {
    return path => translate?.[minisLang]?.calculator?.[path] || 'Err';
  },
};

store.mutations = {
  switchTheme(state) {
    const newTheme = state.minisTheme == 'light' ? 'dark' : 'light';
    Vue.set(state, 'minisTheme', newTheme);
  },
  initMinis(state, { translate, minisList }) {
    Vue.set(state, 'minisList', minisList);
    Vue.set(state, 'translate', translate);
  },
};

export default store;