import { apiAdapter } from '@/adapters/api.adapters';
import { IAdapter, IMovie, IMoviesResponse, IBareMovie } from '@/types';

export class MoviesService {
  constructor(private apiAdapter: IAdapter) {}

  get baseUrl(): string {
    return 'movies';
  }

  movieMapper(item: IBareMovie): IMovie {
    return {
      id: item.id.toString(),
      poster: item.poster_path || '',
      title: item.title,
      releaseDate: new Date(item.release_date || ''),
      genres: item.genres || [],
      rating: item.vote_average || 0,
      description: item.overview || '',
      duration: item.runtime || 0,
    };
  }

  async getMovies(
    search = '',
    sortBy = '',
    genres: string[] = []
  ): Promise<IMovie[]> {
    const filter = genres.length ? `&filter=${genres.join(',')}` : '';

    try {
      const res = await this.apiAdapter.get<IMoviesResponse>(
        `${this.baseUrl}?search=${search}&searchBy=title&sortBy=${sortBy}${filter}&sortOrder=desc`
      );
      return res.data.map(this.movieMapper);
    } catch (e) {
      // Empty
    }

    return [];
  }

  async getMovieById(id: string): Promise<IMovie> {
    const movie = await this.apiAdapter.get<IBareMovie>(
      `${this.baseUrl}/${id}`
    );
    return this.movieMapper(movie);
  }
}

export const moviesService = new MoviesService(apiAdapter);
