import { expect } from 'chai';
import { mount, Wrapper } from '@vue/test-utils';
import Input from '@/components/basic/Input.vue';
import NrButton from '@/components/basic/Button.vue';

describe('Input', () => {
  let wrapper: Wrapper<Input>;
  const value = 'value';

  beforeEach(() => {
    wrapper = mount(Input, {
      propsData: { button: 'button', defaultValue: value, name: 'name' } as any,
    });
  });

  it('input change should emit changed event', async () => {
    const input = wrapper.find('input');
    const emitted = wrapper.emitted() as any;
    await input.trigger('input');
    expect(!!emitted.changed).to.eql(true);
  });

  it('button click should emit clicked event', async () => {
    const button = wrapper.find('button');
    const emitted = wrapper.emitted() as any;
    await button.trigger('click');
    expect(emitted.clicked[0][0]).to.eql(value);
  });
});
