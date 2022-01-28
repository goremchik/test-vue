import { expect } from 'chai';
import { shallowMount, Wrapper } from '@vue/test-utils';
import AddMovie from '@/components/movie/AddMovie.vue';

describe('AddMovie', () => {
  let wrapper: Wrapper<AddMovie>;
  beforeEach(() => {
    wrapper = shallowMount(AddMovie, {});
  });

  it('should render add movie button', () => {
    const button = wrapper.find('.add-movie');
    expect(!!button.element).to.eql(true);
  });
});
