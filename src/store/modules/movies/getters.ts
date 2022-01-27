import { MoviesState } from './state';
import { IMovie } from '@/types';
import { Getters } from '@/store/types';

export enum MoviesGetterKeys {
  movies = 'movies',
  genres = 'genres',
  search = 'search',
  searchBy = 'searchBy',
  sortBy = 'sortBy',
  moviesNumber = 'moviesNumber',
  selectedMovie = 'find',
}

export const getters = {
  [MoviesGetterKeys.movies]: (state: MoviesState): IMovie[] =>
    state.movies || [],
  [MoviesGetterKeys.genres]: (state: MoviesState): string[] =>
    state.genres || [],
  [MoviesGetterKeys.search]: (state: MoviesState): string => state.search || '',
  [MoviesGetterKeys.searchBy]: (state: MoviesState): string =>
    state.searchBy || '',
  [MoviesGetterKeys.sortBy]: (state: MoviesState): string => state.sortBy || '',
  [MoviesGetterKeys.moviesNumber]: (
    _: MoviesState,
    movieGetters: Record<MoviesGetterKeys, any>
  ): number => movieGetters.movies.length,
  [MoviesGetterKeys.selectedMovie]: (state: MoviesState): IMovie | null =>
    state.selectedMovie || null,
};

export type MoviesGetters<K extends MoviesGetterKeys> = Getters<
  typeof getters,
  K
>;
