import OldTram  from './OldTram';

describe('OldTram', () => {
  describe('next()', () => {
    it('should call the perform function on its currentAction', () => {
      const mockAction = {
        type: 'mock',
        duration: 10,
        perform: jest.fn(),
      };
      const tram = new OldTram({currentAction: mockAction, timeTillActionIsFinished: 0});
      tram.next();

      expect(mockAction.perform).toHaveBeenCalled();
    });
  });
});
