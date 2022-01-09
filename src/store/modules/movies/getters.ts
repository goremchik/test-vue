import { MoviesState } from './state';
import { IMovie } from '@/types';

export const getters = {
  movies: (state: MoviesState): IMovie[] => state.movies,
  genres: (state: MoviesState): string[] => state.genres || [],
  search: (state: MoviesState): string => state.search || '',
  searchBy: (state: MoviesState): string => state.searchBy || '',
  sortBy: (state: MoviesState): string => state.sortBy || '',
  moviesNumber: (_: MoviesState, movieGetters: any): number =>
    movieGetters.movies.length,
  selectedMovie: (state: MoviesState, movieGetters: any): IMovie | null =>
    movieGetters.movies.find(({ id }: any) => id === state.selectedMovieId) ||
    null,
};
