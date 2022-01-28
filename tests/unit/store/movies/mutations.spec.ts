import { expect } from 'chai';
import { mutations } from '@/store/modules/movies/mutations';
import movies from '@mock/movies';
import {
  MoviesState,
  state as defaultState,
} from '@/store/modules/movies/state';

describe('Store mutations: movies', () => {
  let state: MoviesState;

  beforeEach(() => {
    state = defaultState;
  });

  it('setMovies', () => {
    mutations.setMovies(state, movies);
    expect(state.movies).to.eql(movies);
  });

  it('setGenres', () => {
    mutations.setGenres(state, movies[0].genres);
    expect(state.genres).to.eql(movies[0].genres);
  });

  it('setSearch', () => {
    const search = 'search';
    mutations.setSearch(state, search);
    expect(state.search).to.eql(search);
  });

  it('setSearchBy', () => {
    const searchBy = 'searchBy';
    mutations.setSearchBy(state, searchBy);
    expect(state.searchBy).to.eql(searchBy);
  });

  it('setSortBy', () => {
    const sortBy = 'sortBy';
    mutations.setSortBy(state, sortBy);
    expect(state.sortBy).to.eql(sortBy);
  });

  it('selectMovie', () => {
    mutations.selectMovie(state, movies[0]);
    expect(state.selectedMovie).to.eql(movies[0]);
  });
});
