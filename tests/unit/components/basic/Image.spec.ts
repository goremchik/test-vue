import { expect } from 'chai';
import { shallowMount, Wrapper } from '@vue/test-utils';
import Image from '@/components/basic/Image.vue';
import { directives } from '../../mock/stubs';

describe('Image', () => {
  let wrapper: Wrapper<Image>;
  beforeEach(() => {
    wrapper = shallowMount(Image, { directives });
  });

  it('should render img', () => {
    const img = wrapper.find('img');
    expect(!!img).to.eql(true);
  });
});
