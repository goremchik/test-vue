import { expect } from 'chai';
import { mount, Wrapper } from '@vue/test-utils';
import MovieContext from '@/components/movie/MovieContext.vue';
import NrContextMenu from '@/components/basic/ContextMenu.vue';

describe('MovieContext', () => {
  let wrapper: Wrapper<MovieContext>;
  beforeEach(() => {
    wrapper = mount(MovieContext, {
      components: { NrContextMenu },
    });
  });

  it('should render 2 items', () => {
    const items = wrapper.findAll('li');
    expect(items.length).to.be.equal(2);
  });
});
