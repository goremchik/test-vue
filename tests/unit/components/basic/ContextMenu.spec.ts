import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { shallowMount, Wrapper } from '@vue/test-utils';
import ContextMenu from '@/components/basic/ContextMenu.vue';
import Vue from 'vue';
chai.use(spies);

describe('ContextMenu', () => {
  let wrapper: Wrapper<ContextMenu>;
  let vm: any;

  beforeEach(() => {
    wrapper = shallowMount(ContextMenu);
    vm = wrapper.vm;
  });

  it('should close on blur', async () => {
    const container = wrapper.find('.context-menu');
    vm.show = true;
    vm.left = 1;
    vm.top = 1;
    await container.trigger('blur');
    expect(vm.show).to.equal(false);
    expect(vm.left).to.equal(0);
    expect(vm.top).to.equal(0);
  });

  it('should close on icon click', async () => {
    const icon = wrapper.find('.icon--cross');
    vm.show = true;
    await icon.trigger('click');
    expect(vm.show).to.equal(false);
  });

  it('open method should set open property and focus element', async () => {
    const spy = chai.spy.on(wrapper.vm.$el, 'focus');
    vm.open(new Event('click'));
    await Vue.nextTick();
    expect(spy).to.have.been.called();
    expect(vm.show).to.equal(true);
  });
});
