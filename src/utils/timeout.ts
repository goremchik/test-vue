import { Timer, AnyCallback } from '@/types';

export function throttle(callback: AnyCallback, wait: number): AnyCallback {
  let timeout: Timer;
  let previous = 0;

  return (...args: unknown[]) => {
    const now = Date.now();
    previous = previous || now;
    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      callback(...args);
    } else if (!timeout) {
      timeout = setTimeout(() => callback(...args), remaining);
    }
  };
}

export function debounce(callback: AnyCallback, wait: number): AnyCallback {
  let timerId: ReturnType<typeof setTimeout>;
  return (...args: unknown[]): void => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), wait);
  };
}
