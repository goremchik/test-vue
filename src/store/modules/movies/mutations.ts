import { MoviesState } from './state';
import { IMovie } from '@/types';

export const mutations = {
  setMovies(state: MoviesState, movies: IMovie[] = []): void {
    state.movies = movies;
  },
  setGenres(state: MoviesState, genres: string[] = []): void {
    state.genres = genres;
  },
  setSearch(state: MoviesState, search = ''): void {
    state.search = search;
  },
  setSearchBy(state: MoviesState, searchBy = ''): void {
    state.searchBy = searchBy;
  },
  setSortBy(state: MoviesState, sortBy = ''): void {
    state.sortBy = sortBy;
  },
  selectMovie(state: MoviesState, movieId: string): void {
    state.selectedMovieId = movieId;
  },
};

export type MovieMutations = typeof mutations;
export type MovieMutationKeys = keyof MovieMutations;
export type MovieMutationArguments<K extends MovieMutationKeys> = Parameters<
  MovieMutations[K]
>[1];
