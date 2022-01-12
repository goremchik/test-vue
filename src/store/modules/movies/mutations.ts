import { MoviesState } from './state';
import { IMovie } from '@/types';
import { MutationArguments, Mutations } from '@/store/types';

export enum MoviesMutationKeys {
  setMovies = 'setMovies',
  setGenres = 'setGenres',
  setSearch = 'setSearch',
  setSearchBy = 'setSearchBy',
  setSortBy = 'setSortBy',
  selectMovie = 'selectMovie',
}

export const mutations = {
  [MoviesMutationKeys.setMovies](
    state: MoviesState,
    movies: IMovie[] = []
  ): void {
    state.movies = movies;
  },
  [MoviesMutationKeys.setGenres](
    state: MoviesState,
    genres: string[] = []
  ): void {
    state.genres = genres;
  },
  [MoviesMutationKeys.setSearch](state: MoviesState, search = ''): void {
    state.search = search;
  },
  [MoviesMutationKeys.setSearchBy](state: MoviesState, searchBy = ''): void {
    state.searchBy = searchBy;
  },
  [MoviesMutationKeys.setSortBy](state: MoviesState, sortBy = ''): void {
    state.sortBy = sortBy;
  },
  [MoviesMutationKeys.selectMovie](state: MoviesState, movie: IMovie): void {
    state.selectedMovie = movie;
  },
};

export type MovieMutationArguments<K extends MoviesMutationKeys> =
  MutationArguments<typeof mutations, K>;

export type MoviesMutations<K extends MoviesMutationKeys> = Mutations<
  typeof mutations,
  K
>;
