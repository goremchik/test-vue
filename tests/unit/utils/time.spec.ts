import { expect } from 'chai';
import { duration } from '@/utils/time';

describe('Utils: time', () => {
  describe('duration', () => {
    it('should show minutes', () => {
      expect(duration(59)).to.eql('59 min');
      expect(duration()).to.eql('0 min');
      expect(duration(3)).to.eql('3 min');
    });

    it('should show hours and minutes', () => {
      expect(duration(60)).to.eql('1h ');
      expect(duration(64)).to.eql('1h 4 min');
      expect(duration(128)).to.eql('2h 8 min');
    });
  });
});
