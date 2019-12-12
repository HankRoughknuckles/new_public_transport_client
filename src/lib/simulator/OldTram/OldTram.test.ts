import { line1Tram } from '../../../factories/oldTram';
import { turnAround } from './Actions';

describe('OldTram', () => {
  describe('next()', () => {
    it('should call the perform function on its currentAction', () => {
      const mockAction = {
        type: 'mock',
        duration: 10,
        perform: jest.fn(),
      };
      const tram = line1Tram({currentAction: mockAction, timeTillActionIsFinished: 0});
      tram.next();

      expect(mockAction.perform).toHaveBeenCalled();
    });
  });
});
