import { IMovie } from '@/types';

export const moviesStoreKey = 'movies';

export type MoviesState = {
  movies: IMovie[];
  genres: string[];
  selectedMovieId?: string | null;
  search: string;
  searchBy: string;
  sortBy: string;
};

export const state: MoviesState = {
  movies: [],
  genres: [],
  selectedMovieId: null,
  search: '',
  searchBy: '',
  sortBy: 'date',
};
