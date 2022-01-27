import { expect } from 'chai';
import { shallowMount, Wrapper } from '@vue/test-utils';
import MovieDetails from '@/components/movie/MovieDetails.vue';
import NrImage from '@/components/basic/Image.vue';
import movies from '@mock/movies';
import { directives } from '../../mock/stubs';

describe('MovieDetails', () => {
  let wrapper: Wrapper<MovieDetails>;
  const movie = movies[0];

  beforeEach(() => {
    wrapper = shallowMount(MovieDetails, {
      components: { NrImage },
      propsData: { movie },
      directives,
    });
  });

  it('should render image, title, rating, description', () => {
    const img = wrapper.find('.movie-details__image');
    const title = wrapper.find('.movie-details__title');
    const rating = wrapper.find('.movie-details__rating');
    const description = wrapper.find('.movie-details__description');

    expect(!!img.element).to.eql(true);
    expect(title.text()).to.eql(movie.title);
    expect(rating.text()).to.eql('4');
    expect(description.text()).to.eql(movie.description);
  });

  it('should render genres, duration, date', () => {
    const genre = wrapper.find('.movie-details__genre');
    const date = wrapper.find('.movie-details__date');
    const duration = wrapper.find('.movie-details__duration');

    expect(duration.text()).to.eql('2h 2 min');
    expect(date.text()).to.eql('2020');
    expect(genre.text()).to.eql('Action, Adventure');
  });
});
