import Vue from 'vue';
import Vuex from 'vuex';
import { moviesStore, moviesStoreKey } from './modules/movies';
import { RootState } from './types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    [moviesStoreKey]: moviesStore,
  },
  devtools: true,
});
