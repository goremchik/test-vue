import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { mount, Wrapper, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { getters } from '@/store/modules/movies/getters';
import SortBy from '@/components/other/SortBy.vue';
import { moviesStoreKey } from '@/store/modules/movies/state';
import { MoviesActionKeys } from '@/store/modules/movies/actions';
import { MoviesMutationKeys } from '@/store/modules/movies/mutations';

chai.use(spies);

describe('SortBy', () => {
  let wrapper: Wrapper<SortBy>;
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const actions = { [MoviesActionKeys.loadMovies]: chai.spy() };
  const mutations = { [MoviesMutationKeys.setSortBy]: chai.spy() };

  const store = new Vuex.Store({
    modules: {
      [moviesStoreKey]: {
        actions,
        mutations,
        getters,
        state: { sortBy: '' },
        namespaced: true,
      },
    },
  });

  beforeEach(() => {
    wrapper = mount(SortBy, {
      store,
      localVue,
    });
  });

  it('should render 2 options', () => {
    const options = wrapper.findAll('option');
    expect(options.length).to.eql(2);
  });

  it('should load movies on input change', async () => {
    const input = wrapper.find('select');
    const value = 'release_date';
    input.setValue(value);
    await input.trigger('input');

    expect(actions[MoviesActionKeys.loadMovies]).to.have.been.called();
    expect(mutations[MoviesMutationKeys.setSortBy]).to.have.been.called.with(
      value
    );
  });
});
