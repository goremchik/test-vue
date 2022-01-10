import Vue from 'vue';
import Vuex from 'vuex';
import { moviesStore } from './modules/movies';
import { RootState } from './types';
import { moviesStoreKey } from './modules/movies/state';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    [moviesStoreKey]: moviesStore,
  },
  devtools: true,
});
