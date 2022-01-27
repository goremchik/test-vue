import { expect } from 'chai';
import { shallowMount, Wrapper } from '@vue/test-utils';
import Select from '@/components/basic/Select.vue';
import { ISelectable } from '@/types';

describe('Select', () => {
  let wrapper: Wrapper<Select>;
  const defaultValue = 'value';
  const secondValue = 'secondValue';
  const name = 'name';
  const items: ISelectable[] = [
    { value: defaultValue, text: defaultValue },
    { value: secondValue, text: secondValue },
  ];

  beforeEach(() => {
    wrapper = shallowMount(Select, {
      propsData: { items, defaultValue, name } as any,
    });
  });

  it('should render 2 options', () => {
    const inputs = wrapper.findAll('option');
    expect(inputs.length).to.eql(2);
  });

  it('1st options should be selected', () => {
    const option = wrapper.find('option');
    expect((option.element as HTMLOptionElement).selected).to.eql(true);
  });

  it('on select changes should emit changed event', async () => {
    const select = wrapper.find('select');
    const emitted = wrapper.emitted() as any;
    select.setValue(secondValue);
    await select.trigger('input');

    expect(emitted.changed[0][0]).to.eql(secondValue);
    expect((wrapper.vm as any).value).to.eql(secondValue);
  });
});
