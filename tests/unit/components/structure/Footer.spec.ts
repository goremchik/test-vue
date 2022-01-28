import { expect } from 'chai';
import { shallowMount, Wrapper } from '@vue/test-utils';
import Footer from '@/components/structure/Footer.vue';
import NrLogo from '@/components/structure/Logo.vue';

describe('Footer', () => {
  let wrapper: Wrapper<Footer>;
  beforeEach(() => {
    wrapper = shallowMount(Footer, {
      components: { NrLogo },
    });
  });

  it('should render footer', () => {
    const footer = wrapper.find('.footer');
    expect(!!footer.element).to.eql(true);
  });
});
