import { expect } from 'chai';
import { getters } from '@/store/modules/movies/getters';
import movies from '@mock/movies';
import { MoviesState } from '@/store/modules/movies/state';

describe('Store getters: movies', () => {
  const movie = movies[0];
  const search = 'search';
  const searchBy = 'searchBy';
  const sortBy = 'sortBy';

  const state: MoviesState = {
    movies,
    selectedMovie: movie,
    genres: movie.genres,
    search,
    searchBy,
    sortBy,
  };
  const emptyState = {} as any;

  it('get movies', () => {
    expect(getters.movies(state)).to.eql(movies);
  });

  it('get movies (default value)', () => {
    expect(getters.movies(emptyState)).to.eql([]);
  });

  it('get genres', () => {
    expect(getters.genres(state)).to.eql(movie.genres);
  });

  it('get genres (default value)', () => {
    expect(getters.genres(emptyState)).to.eql([]);
  });

  it('get search', () => {
    expect(getters.search(state)).to.eql(search);
  });

  it('get search (default value)', () => {
    expect(getters.search(emptyState)).to.eql('');
  });

  it('get searchBy', () => {
    expect(getters.searchBy(state)).to.eql(searchBy);
  });

  it('get searchBy (default value)', () => {
    expect(getters.searchBy(emptyState)).to.eql('');
  });

  it('get sortBy', () => {
    expect(getters.sortBy(state)).to.eql(sortBy);
  });

  it('get sortBy (default value)', () => {
    expect(getters.sortBy(emptyState)).to.eql('');
  });

  it('get moviesNumber', () => {
    expect(getters.moviesNumber(state, state as Record<string, any>)).to.eql(3);
  });

  it('get moviesNumber (default value)', () => {
    expect(
      getters.moviesNumber(emptyState, { movies: [] } as Record<string, any>)
    ).to.eql(0);
  });

  it('get selectedMovie', () => {
    expect(getters.selectedMovie(state)).to.eql(movie);
  });

  it('get selectedMovie (default value)', () => {
    expect(getters.selectedMovie(emptyState)).to.eql(null);
  });
});
