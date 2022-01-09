import { moviesStoreKey } from './modules/movies';
import { MoviesState } from './modules/movies/state';

export interface RootState {
  [moviesStoreKey]: MoviesState;
}

export type OmitFirstArg<F> = F extends (x: any, ...args: infer P) => infer R
  ? (...args: P) => R
  : never;
export type Actions<A, K extends keyof A> = OmitFirstArg<A[K]>;
