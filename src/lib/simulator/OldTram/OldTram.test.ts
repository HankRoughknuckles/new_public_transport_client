import { initializeRegistry } from '../StationRegistry';
import { line1Tram } from '../../../factories/oldTram';
import { load, move } from './Actions';
import factories from '../../../factories';

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

  describe('currentStation()', () => {
    it('should return the station in the currentSegment when loading', () => {
      initializeRegistry(factories.allStations());
      const tram = factories.line1Tram({currentAction: load})

      expect(tram.currentStation!.id).toEqual(tram.currentSegment.stationId)
    });

    it('should return undefined otherwise', () => {
      initializeRegistry(factories.allStations());
      const tram = factories.line1Tram({currentAction: move})

      expect(tram.currentStation).toEqual(undefined)
    });
  });
});
