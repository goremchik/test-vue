import { MoviesState, moviesStoreKey } from './modules/movies/state';

export interface RootState {
  [moviesStoreKey]: MoviesState;
}

export type OmitFirstArg<F> = F extends (x: any, ...args: infer P) => infer R
  ? (...args: P) => R
  : never;

export type Actions<A, K extends keyof A> = OmitFirstArg<A[K]>;

export type Mutations<M, K extends keyof M> = OmitFirstArg<M[K]>;

export type Getters<G extends Record<string, any>, K extends keyof G> =
  | ReturnType<G[K]>
  | OmitFirstArg<G[K]>;

export type MutationArguments<
  M extends Record<string, (...args: any[]) => void>,
  K extends keyof M
> = Parameters<M[K]>[1];
