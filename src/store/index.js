import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import createMutationsSharer from 'vuex-shared-mutations';

import minisModule from './minis';
const projectKey = 'minis-home';

const store = {};
Vue.use(Vuex);

store.state = () => ({
  isFullscreen: false,
  projectKey: projectKey.split('-').slice(1).join('-'),
});


store.mutations = {
  switchFullscreen: state => Vue.set(state, 'isFullscreen', !state.isFullscreen),
};


const persistedMinis = [
  'minis.minisThemeMain', 
  'minis.minisThemeSpecial', 
  'minis.minisLang',
  'minis.themesJSON', 
  'minis.translateJSON', 
  'minis.minisJSON',
];
const persistedLocal = [
  // 'isFullscreen',
];
store.modules = { minis: minisModule };
store.plugins = [
  createMutationsSharer({ predicate: () => [...persistedMinis, ...persistedLocal] }),
  createPersistedState({ paths: persistedMinis, key: 'minis' }),
  createPersistedState({ paths: persistedLocal, key: projectKey }),
];

export default new Vuex.Store(store);