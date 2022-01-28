import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { moviesService } from '@/services/movies.service';
import { actions } from '@/store/modules/movies/actions';
import { MoviesMutationKeys } from '@/store/modules/movies/mutations';
import movies from '@mock/movies';
chai.use(spies);

describe('Store actions: movies', () => {
  const search = 'search';
  const sortBy = 'sortBy';

  const ctx = {
    commit: () => {
      // Empty
    },
    getters: { search, sortBy },
  } as any;

  const spyCommit = chai.spy.on(ctx, 'commit');
  const spyMovies = chai.spy.on(moviesService, 'getMovies', () =>
    Promise.resolve(movies)
  );
  const spyMovieById = chai.spy.on(moviesService, 'getMovieById', () =>
    Promise.resolve(movies[0])
  );

  it('loadMovies should call set movies mutation', async () => {
    await actions.loadMovies(ctx);

    expect(spyMovies).to.have.been.called.with(search, sortBy);
    expect(spyCommit).to.have.been.called.with(
      MoviesMutationKeys.setMovies,
      movies
    );
  });

  it('loadMovieById should call select movie mutation', async () => {
    const id = '1';
    await actions.loadMovieById(ctx, id);

    expect(spyMovieById).to.have.been.called.with(id);
    expect(spyCommit).to.have.been.called.with(
      MoviesMutationKeys.selectMovie,
      movies[0]
    );
  });

  it('loadGenres should call set genres mutation', async () => {
    await actions.loadGenres(ctx);
    expect(spyCommit).to.have.been.called.with(MoviesMutationKeys.setGenres, [
      'Action',
      'Adventure',
      'Science Fiction',
    ]);
  });
});
