import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { MoviesService } from '@/services/movies.service';
chai.use(spies);

describe('MoviesService', () => {
  const movie = {
    id: '1',
    poster: 'poster_path',
    title: 'title',
    releaseDate: new Date('2021-01-01'),
    genres: [],
    rating: 5,
    description: 'overview',
    duration: 10,
  };

  const bareMovie = {
    id: 1,
    title: 'title',
    tagline: 'tagline',
    vote_average: 5,
    vote_count: 1,
    release_date: '2021-01-01',
    poster_path: 'poster_path',
    overview: 'overview',
    genres: [],
    runtime: 10,
  };

  it('movieMapper should map BE response to movie data model', () => {
    const service = new MoviesService({} as any);
    expect(service.movieMapper(bareMovie)).to.deep.equal(movie);
  });

  describe('movies', () => {
    const stubApiAdapter: any = {
      get: () => Promise.resolve({ data: [bareMovie] }),
    };
    const spy = chai.spy.on(stubApiAdapter, 'get');
    const service = new MoviesService(stubApiAdapter);

    it('should load movies', async () => {
      const res = await service.getMovies();
      expect(res).to.deep.equal([movie]);
      expect(spy).to.have.been.called.with(
        'movies?search=&searchBy=title&sortBy=&sortOrder=desc'
      );
    });

    it('should load movies with search', async () => {
      await service.getMovies('search');
      expect(spy).to.have.been.called.with(
        'movies?search=search&searchBy=title&sortBy=&sortOrder=desc'
      );
    });

    it('should load movies with sort info', async () => {
      await service.getMovies('', 'date');
      expect(spy).to.have.been.called.with(
        'movies?search=&searchBy=title&sortBy=date&sortOrder=desc'
      );
    });
  });

  it('should load movie by id', async () => {
    const stubApiAdapter: any = {
      get: () => Promise.resolve(bareMovie),
    };
    const service = new MoviesService(stubApiAdapter);
    const spy = chai.spy.on(stubApiAdapter, 'get');
    const res = await service.getMovieById('1');

    expect(res).to.deep.equal(movie);
    expect(spy).to.have.been.called.with('movies/1');
  });
});
