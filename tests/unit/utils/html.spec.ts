import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { addEvent, isInView } from '@/utils/html';

chai.use(spies);

describe('Utils: html', () => {
  describe('addEvent', () => {
    const event = 'event';
    const listener = () => {
      // Empty
    };

    const el: any = {
      addEventListener: () => {
        //
      },
      removeEventListener: () => {
        //
      },
    };

    it('should call add event function', () => {
      const spy = chai.spy.on(el, 'addEventListener');
      addEvent(el, event, listener);
      expect(spy).to.have.been.called.with(event, listener);
    });

    it('should remove event from callback', () => {
      const spy = chai.spy.on(el, 'removeEventListener');
      const cb = addEvent(el, event, listener);
      cb();
      expect(spy).to.have.been.called.with(event, listener);
    });
  });

  describe('isInView', () => {
    const el: any = {};

    beforeEach(() => {
      //@ts-ignore
      global.window = { innerHeight: 768 };
    });

    it('element should be in view', () => {
      el.getBoundingClientRect = () => ({ top: 100, bottom: 300 });
      expect(isInView(el)).to.eql(true);
    });
  });
});
