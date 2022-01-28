import { isInView } from '@/utils/html';
import { DirectiveOptions, DirectiveBinding } from 'vue/types/options';
import { EmptyCallback } from '@/types';

const callbackKey = Symbol('callback');
const finishedKey = Symbol('finished');
interface ImgWithListeners extends HTMLImageElement {
  [callbackKey]: EmptyCallback;
  [finishedKey]?: boolean;
}

export class ImageLazyLoadDirective implements DirectiveOptions {
  private io = new IntersectionObserver(
    (entries) => {
      entries
        .filter(({ isIntersecting }) => isIntersecting)
        .forEach((item) => {
          const img = item.target as ImgWithListeners;
          if (!img[finishedKey] && img[callbackKey]) {
            img[callbackKey]();
          }
        });
    },
    { threshold: [0] }
  );

  inserted = (el: HTMLElement, binding: DirectiveBinding): void => {
    const img = el as ImgWithListeners;
    const src = binding.value;

    if (!img || img.src || !src) return;
    if (isInView(img)) {
      img.src = src || '';
      img[finishedKey] = true;
      return;
    }

    const callback = () => {
      img.src = img.dataset.src || '';
      this.unbind(img);
    };

    img.dataset.src = src;
    img[callbackKey] = callback;

    this.io.observe(img);
  };

  update = (el: HTMLElement, binding: DirectiveBinding): void => {
    const src = binding.value;
    el.dataset.src = src;
    (el as HTMLImageElement).src = src;
  };

  unbind = (el: HTMLElement): void => {
    const img = el as ImgWithListeners;
    this.io.unobserve(img);
    img[finishedKey] = true;
  };
}
