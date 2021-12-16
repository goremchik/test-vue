export interface IRadio {
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
