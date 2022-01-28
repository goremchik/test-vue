import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { mount, Wrapper, createLocalVue } from '@vue/test-utils';
import SearchBy from '@/components/other/SearchBy.vue';
import Vuex from 'vuex';
import { getters } from '@/store/modules/movies/getters';
import { MoviesActionKeys } from '@/store/modules/movies/actions';
import { moviesStoreKey } from '@/store/modules/movies/state';
import { MoviesMutationKeys } from '@/store/modules/movies/mutations';

chai.use(spies);

describe('SearchBy', () => {
  let wrapper: Wrapper<SearchBy>;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const actions = {
    [MoviesActionKeys.loadMovies]: chai.spy(),
    [MoviesActionKeys.loadGenres]: chai.spy(),
  };
  const mutations = { [MoviesMutationKeys.setSearchBy]: chai.spy() };
  const genres = ['a', 'b'];

  const store = new Vuex.Store({
    modules: {
      [moviesStoreKey]: {
        actions,
        getters,
        mutations,
        state: { searchBy: '', genres },
        namespaced: true,
      },
    },
  });

  beforeEach(() => {
    wrapper = mount(SearchBy, {
      store,
      localVue,
    });
  });

  it('should render 3 options', () => {
    const inputs = wrapper.findAll('input');
    expect(inputs.length).to.eql(3);
  });

  it('should load movies on radio change', async () => {
    const input = wrapper.findAll('input').at(1);
    await input.trigger('input');

    expect(actions[MoviesActionKeys.loadMovies]).to.have.been.called();
    expect(mutations[MoviesMutationKeys.setSearchBy]).to.have.been.called.with(
      'a'
    );
  });
});
