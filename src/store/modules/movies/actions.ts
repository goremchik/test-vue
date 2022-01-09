import { MovieMutationKeys, MovieMutationArguments } from './mutations';
import movies from '@/mock/movies';
import { IMovie, IBareMovie } from '@/types';
import { Actions } from '@/store/types';

export type MoviesContext = {
  commit<K extends MovieMutationKeys>(
    key: K,
    payload: MovieMutationArguments<K>
  ): void;
  getters: any;
};

const movieMapper = (item: IBareMovie): IMovie => ({
  id: item.id.toString(),
  poster: item.poster_path || '',
  title: item.title,
  releaseDate: new Date(item.release_date || ''),
  genres: item.genres || [],
  rating: item.vote_average || 0,
  description: item.overview || '',
  duration: item.runtime || 0,
});

export const actions = {
  async loadMovies({ commit, getters }: MoviesContext): Promise<void> {
    const { search, searchBy, sortBy } = getters;
    const searchLower = search.toLowerCase();
    // TODO: this is temporary logic (will be replaced with API call)
    const data = movies
      .map(movieMapper)
      .filter((movie) => !searchBy || movie.genres.includes(searchBy))
      .filter(
        (movie) =>
          !search ||
          movie.title.toLowerCase().includes(searchLower) ||
          movie.description?.toLowerCase().includes(searchLower)
      );

    if (sortBy) {
      data.sort((m1, m2) => {
        if (sortBy === 'release') {
          return (+m2?.releaseDate || 0) - (+m1?.releaseDate || 0);
        } else if (sortBy === 'rating') {
          return (m2?.rating || 0) - (m1?.rating || 0);
        }

        return 0;
      });
    }
    commit('setMovies', data);
  },

  async loadGenres({ commit }: MoviesContext): Promise<void> {
    const genres = movies.map(({ genres = [] }) => genres).flat();
    commit('setGenres', [...new Set(genres)]);
  },
};

type Type = typeof actions;
export type MoviesActions<K extends keyof Type> = Actions<Type, K>;
