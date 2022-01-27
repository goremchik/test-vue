import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { mount, Wrapper, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { getters } from '@/store/modules/movies/getters';
import { MoviesActionKeys } from '@/store/modules/movies/actions';
import MoviesContainer from '@/components/movie/MoviesContainer.vue';
import NrMovieCard from '@/components/movie/MovieCard.vue';
import NrMovieContext from '@/components/movie/MovieContext.vue';
import { moviesStoreKey } from '@/store/modules/movies/state';
import movies from '@mock/movies';
import { directives } from '../../mock/stubs';

chai.use(spies);

describe('MoviesContainer', () => {
  let wrapper: Wrapper<MoviesContainer>;
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const store = new Vuex.Store({
    modules: {
      [moviesStoreKey]: {
        actions: { [MoviesActionKeys.loadMovies]: chai.spy() },
        getters,
        state: { movies },
        namespaced: true,
      },
    },
  });

  beforeEach(() => {
    wrapper = mount(MoviesContainer, {
      components: { NrMovieCard, NrMovieContext },
      store,
      localVue,
      directives,
    });
  });

  it('should show movies number', () => {
    const num = wrapper.find('.movies__highlight');
    expect(num.text()).to.eql('3');
  });

  it('should render 3 movie cards', () => {
    const items = wrapper.findAll('.movies__item');
    expect(items.length).to.eql(3);
  });
});
