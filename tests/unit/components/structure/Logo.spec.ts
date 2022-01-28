import { expect } from 'chai';
import { shallowMount, Wrapper, RouterLinkStub } from '@vue/test-utils';
import Logo from '@/components/structure/Logo.vue';

describe('Logo', () => {
  let wrapper: Wrapper<Logo>;

  beforeEach(() => {
    wrapper = shallowMount(Logo, {
      stubs: { RouterLink: RouterLinkStub },
    });
  });

  it('should render link', () => {
    const link = wrapper.find('a');
    expect(!!link.element).to.eql(true);
  });
});
