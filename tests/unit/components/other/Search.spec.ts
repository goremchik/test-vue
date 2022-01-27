import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { mount, Wrapper, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Search from '@/components/other/Search.vue';
import { getters } from '@/store/modules/movies/getters';
import { moviesStoreKey } from '@/store/modules/movies/state';
import { MoviesActionKeys } from '@/store/modules/movies/actions';
import { MoviesMutationKeys } from '@/store/modules/movies/mutations';

chai.use(spies);

describe('Search', () => {
  let wrapper: Wrapper<Search>;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const actions = { [MoviesActionKeys.loadMovies]: chai.spy() };
  const mutations = { [MoviesMutationKeys.setSearch]: chai.spy() };

  const store = new Vuex.Store({
    modules: {
      [moviesStoreKey]: {
        actions,
        getters,
        mutations,
        state: { search: '' },
        namespaced: true,
      },
    },
  });

  beforeEach(() => {
    wrapper = mount(Search, {
      store,
      localVue,
    });
  });

  it('should render input', () => {
    const input = wrapper.find('.search__input');
    expect(!!input.element).to.eql(true);
  });

  it('should load movies on submit', async () => {
    const input = wrapper.find('input');
    const button = wrapper.find('button');
    const value = 'value';
    input.setValue(value);
    await button.trigger('click');

    expect(actions[MoviesActionKeys.loadMovies]).to.have.been.called();
  });
});
