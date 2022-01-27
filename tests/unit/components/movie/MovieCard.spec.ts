import { expect } from 'chai';
import { shallowMount, Wrapper, RouterLinkStub } from '@vue/test-utils';
import MovieCard from '@/components/movie/MovieCard.vue';
import NrImage from '@/components/basic/Image.vue';
import movies from '@mock/movies';
import { directives } from '../../mock/stubs';

describe('MovieCard', () => {
  let wrapper: Wrapper<MovieCard>;
  const movie = movies[0];

  beforeEach(() => {
    wrapper = shallowMount(MovieCard, {
      stubs: { RouterLink: RouterLinkStub },
      components: { NrImage },
      propsData: { movie },
      directives,
    });
  });

  it('should render image, title, date, genre', () => {
    const img = wrapper.find('.movie-card__image');
    const title = wrapper.find('.movie-card__title');
    const date = wrapper.find('.movie-card__date');
    const genre = wrapper.find('.movie-card__genre');

    expect(!!img.element).to.eql(true);
    expect(title.text()).to.eql(movie.title);
    expect(date.text()).to.eql('2020');
    expect(genre.text()).to.eql('Action, Adventure');
  });
});
