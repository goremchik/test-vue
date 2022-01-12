import { IMovie } from '@/types';

export const moviesStoreKey = 'movies';

export type MoviesState = {
  movies: IMovie[];
  genres: string[];
  selectedMovie?: IMovie | null;
  search: string;
  searchBy: string;
  sortBy: string;
};

export const state: MoviesState = {
  movies: [],
  genres: [],
  selectedMovie: null,
  search: '',
  searchBy: '',
  sortBy: 'release_date',
};
