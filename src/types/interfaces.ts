export interface ISelectable {
  value: string;
  text: string;
}

export interface IMovie {
  id?: string;
  poster: string;
  title: string;
  releaseDate: Date;
  genres: string[];
  rating?: number;
  description?: string;
  duration?: number;
}

export interface IBareMovie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

export interface IAdapter {
  get<T>(path: string, config?: Record<string, unknown>): Promise<T>;
}

export interface IMoviesResponse {
  data: IBareMovie[];
  total: number;
  offset: number;
  limit: number;
}
