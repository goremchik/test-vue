import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { debounce, throttle } from '@/utils/timeout';
chai.use(spies);

describe('Utils: timeout', () => {
  const timeout = 10;
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  describe('debounce', () => {
    it('callback should be called once after 10ms', async () => {
      const spy = chai.spy();
      const func = debounce(spy, timeout);

      func();
      expect(spy).to.have.not.been.called();
      await delay(9);
      func();
      expect(spy).to.have.not.been.called();
      await delay(12);
      expect(spy).to.have.been.called();
    });
  });

  describe('throttle', () => {
    it('callback should be called once', async () => {
      const spy = chai.spy();
      const func = throttle(spy, timeout);
      await delay(3);
      func();
      expect(spy).to.have.not.been.called();
      await delay(3);
      func();
      expect(spy).to.have.not.been.called();
      await delay(8);
      expect(spy).to.have.been.called();
    });
  });
});
