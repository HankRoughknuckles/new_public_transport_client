import { initial, load, move, turnAround } from './Actions';
import { line1Tram } from '../../../factories/oldTram';
import { setupStationRegistry } from '../../../testUtils';
import factories from '../../../factories';

describe('OldTram', () => {
  beforeAll(() => setupStationRegistry());

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
      const tram = factories.line1Tram({currentAction: load})
      expect(tram.currentStation!.id).toEqual(tram.currentSegment.stationId)
    });

    it('should return undefined otherwise', () => {
      const tram = factories.line1Tram({currentAction: move})
      expect(tram.currentStation).toEqual(undefined)
    });
  });

  describe('isAbleToLoadPassengers', () => {
    it('should return false if action is initial Aciton', () => {
      const tram = factories.line1Tram({currentAction: initial})
      expect(tram.isAbleToLoadPassengers).toEqual(false);
    });

    it('should return false if still moving', () => {
      const tram = factories.line1Tram({currentAction: move})
      expect(tram.isAbleToLoadPassengers).toEqual(false);
    });

    it('should return false if turning around at end of track', () => {
      const tram = factories.line1Tram({currentAction: turnAround})
      expect(tram.isAbleToLoadPassengers).toEqual(false);
    });

    it('should return true if the tram is at the front of the queue in the station', () => {
      const tram = factories.line1Tram({currentAction: load})
      tram.currentStation!.trams = [tram];
      expect(tram.isAbleToLoadPassengers).toEqual(true);
    });

    it('should return true if the tram is 2nd in line at the station', () => {
      const tram = factories.line1Tram({id: '2', currentAction: load})
      tram.currentStation!.trams = [
        factories.line1Tram({id: '1'}),
        tram,
      ];
      expect(tram.isAbleToLoadPassengers).toEqual(true);
    });

    it('should return false if the tram is 3rd in line at the station', () => {
      const tram = factories.line1Tram({id: '3', currentAction: load})
      tram.currentStation!.trams = [
        factories.line1Tram({id: '1'}),
        factories.line1Tram({id: '2'}),
        tram,
      ];
      expect(tram.isAbleToLoadPassengers).toEqual(false);
    });
  });
});
