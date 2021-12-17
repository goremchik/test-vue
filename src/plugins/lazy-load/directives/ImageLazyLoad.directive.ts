import { isInView, addEvent } from '@/utils/html';
import { DirectiveOptions } from 'vue/types/options';
import { EmptyCallback } from '@/types';
import { throttle } from '@/utils/throttle';

const listenersKey = Symbol('listener');
interface ImgWithListeners extends HTMLImageElement {
  [listenersKey]: EmptyCallback[];
}

export class ImageLazyLoadDirective implements DirectiveOptions {
  inserted = (el: HTMLElement): void => {
    const img: ImgWithListeners = el as ImgWithListeners;
    const src = img?.dataset.src;

    if (!img || img.src || !src) return;
    if (isInView(img)) {
      img.src = img.dataset.src || '';
      return;
    }

    const callback = throttle(() => {
      if (isInView(img)) {
        img.src = img.dataset.src || '';
        this.unbind(img);
      }
    }, 30);
    img[listenersKey] = img[listenersKey] || [];
    img[listenersKey].push(
      addEvent(window, 'scroll', callback),
      addEvent(window, 'resize', callback)
    );
  };

  unbind = (el: HTMLElement): void => {
    const img: ImgWithListeners = el as ImgWithListeners;
    img[listenersKey]?.forEach((cb) => cb && cb());
  };
}
