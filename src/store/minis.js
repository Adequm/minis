import Vue from 'vue';

// import minisTranslate from '../assets/translate.json';
// import minisList from '../assets/minisList.json';

export default {
  state: () => ({
    minisLang: 'ru',
    minisTheme: 'dark',
    // minisList,
  }),

  // getters: {
  //   translate: state => minisTranslate[state.minisLang].home,
  // },

  mutations: {
    switchTheme(state) {
      const newTheme = state.minisTheme == 'light' ? 'dark' : 'light';
      Vue.set(state, 'minisTheme', newTheme);
    },
  },
};