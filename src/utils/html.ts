import { EmptyCallback } from '@/types';

export function isInView(el: HTMLElement): boolean {
  const shift = 50; // px
  const { top, bottom } = el.getBoundingClientRect();
  return bottom + shift >= 0 && top - shift <= window.innerHeight;
}

export function addEvent(
  el: Window | HTMLElement,
  event: string,
  listener: EventHandlerNonNull
): EmptyCallback {
  el.addEventListener(event, listener);
  return () => el.removeEventListener(event, listener);
}
