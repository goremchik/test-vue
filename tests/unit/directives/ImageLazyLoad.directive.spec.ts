import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { Wrapper, shallowMount } from '@vue/test-utils';
import { ImageLazyLoadDirective } from '@/plugins/lazy-load/directives/ImageLazyLoad.directive';
import Image from '@/components/basic/Image.vue';
import { IntersectionObserverStub } from '../mock/stubs';
import * as html from '@/utils/html';
chai.use(spies);

describe('ImageLazyLoadDirective', () => {
  let wrapper: Wrapper<Image>;
  chai.spy.on(html, 'isInView', () => true);
  global.IntersectionObserver = IntersectionObserverStub as any;
  const directive = new ImageLazyLoadDirective();
  const src = '/src';

  beforeEach(() => {
    wrapper = shallowMount(Image, {
      directives: { 'img-lazy-load': directive },
      propsData: { src } as any,
    });
  });

  it('should add src attribute to img', () => {
    expect(wrapper.find('img').attributes().src).equal(src);
  });
});
