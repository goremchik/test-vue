import { expect } from 'chai';
import { shallowMount, Wrapper } from '@vue/test-utils';
import Button from '@/components/basic/Button.vue';

describe('Button', () => {
  let wrapper: Wrapper<Button>;
  beforeEach(() => {
    wrapper = shallowMount(Button, {});
  });

  it('should render button', () => {
    const button = wrapper.find('button');
    expect(!!button).to.eql(true);
  });

  it('should emit clicked event', async () => {
    const emitted = wrapper.emitted() as any;
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(emitted.clicked.length).to.eql(1);
  });
});
