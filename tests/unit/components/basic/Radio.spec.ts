import { expect } from 'chai';
import { mount, Wrapper } from '@vue/test-utils';
import Radio from '@/components/basic/Radio.vue';
import { ISelectable } from '@/types';

describe('Radio', () => {
  let wrapper: Wrapper<Radio>;
  const defaultValue = 'value';
  const selectedValue = 'selected';
  const name = 'name';
  const items: ISelectable[] = [
    { value: defaultValue, text: defaultValue },
    { value: selectedValue, text: selectedValue },
  ];

  beforeEach(() => {
    wrapper = mount(Radio, {
      propsData: { items, defaultValue, name } as any,
    });
  });

  it('should render 2 radio items', () => {
    const inputs = wrapper.findAll('input');
    expect(inputs.length).to.eql(2);
  });

  it('should emit changed event on radio select', async () => {
    const input = wrapper.findAll('input').at(1);
    const emitted = wrapper.emitted() as any;
    await input.trigger('input');

    expect(emitted.changed[0][0]).to.eql(selectedValue);
    expect((wrapper.vm as any).value).to.eql(selectedValue);
  });
});
