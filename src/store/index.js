import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import createMutationsSharer from 'vuex-shared-mutations';

import minisModule from './minis';

const store = {};
Vue.use(Vuex);

const persistedMinis = ['minis.minisTheme', 'minis.minisLang'];
const persistedLocal = [];
store.modules = { minis: minisModule };
store.plugins = [
  createMutationsSharer({ predicate: () => persistedMinis }),
  createPersistedState({ paths: persistedMinis, key: 'minis' }),
  createPersistedState({ paths: persistedLocal, key: 'minis-home' }),
];

export default new Vuex.Store(store);