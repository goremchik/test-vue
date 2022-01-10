import { Module } from 'vuex';
import { MoviesState, state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { RootState } from '@/store/types';

export const moviesStore: Module<MoviesState, RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
