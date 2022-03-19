import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import createMutationsSharer from 'vuex-shared-mutations';

const projectKey = 'home';
const switchFullscreenKey = `switchFullscreen_${projectKey}`;
import { vuexMinisModule as minisModule, persistedMinis } from '@minis-core/mixins';

const store = {};
Vue.use(Vuex);

store.state = () => ({
  isFullscreen: false,
  switchFullscreenKey,
  projectKey,
});

store.mutations = {
  [switchFullscreenKey]: state => Vue.set(state, 'isFullscreen', !state.isFullscreen),
};


const persistedLocal = [
  // fullscreenKey,
];
store.modules = { minis: minisModule };
store.plugins = [
  createMutationsSharer({ predicate: () => [...persistedMinis, ...persistedLocal] }),
  createPersistedState({ paths: persistedMinis, key: 'minis' }),
  createPersistedState({ paths: persistedLocal, key: `minis-${projectKey}` }),
];

export default new Vuex.Store(store);