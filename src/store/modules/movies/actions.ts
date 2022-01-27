import { MoviesMutationKeys, MovieMutationArguments } from './mutations';
import { Actions } from '@/store/types';
import { moviesService } from '@/services/movies.service';
import { MoviesGetterKeys } from './getters';

export enum MoviesActionKeys {
  loadMovies = 'loadMovies',
  loadGenres = 'loadGenres',
  loadMovieById = 'loadMovieById',
}

export type MoviesContext = {
  commit(
    key: MoviesMutationKeys,
    payload: MovieMutationArguments<MoviesMutationKeys>
  ): void;
  getters: Record<MoviesGetterKeys, any>;
};

export const actions = {
  async [MoviesActionKeys.loadMovies](ctx: MoviesContext): Promise<void> {
    const { search, sortBy } = ctx.getters;
    const data = await moviesService.getMovies(search, sortBy);
    ctx.commit(MoviesMutationKeys.setMovies, data);
  },

  async [MoviesActionKeys.loadGenres](ctx: MoviesContext): Promise<void> {
    // TODO: should be separate api
    const movies = await moviesService.getMovies();
    const genres = movies.map(({ genres = [] }) => genres).flat();
    ctx.commit(MoviesMutationKeys.setGenres, [...new Set(genres)].slice(0, 7));
  },

  async [MoviesActionKeys.loadMovieById](
    ctx: MoviesContext,
    id: string
  ): Promise<void> {
    const data = await moviesService.getMovieById(id);
    ctx.commit(MoviesMutationKeys.selectMovie, data);
  },
};

export type MoviesActions<K extends MoviesActionKeys> = Actions<
  typeof actions,
  K
>;
