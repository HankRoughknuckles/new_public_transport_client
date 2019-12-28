import load from './load';
import { setupStationRegistry } from '../../../../testUtils';
import OldTram from '../OldTram';
import factories from '../../../../factories';
import {segment} from '../../../../factories/segment';
import {station} from '../../../../factories/station';
import {tramLine} from '../../../../factories/tramLine';

describe('the Load action', () => {
  beforeEach(() => {
    setupStationRegistry()
  });

  describe('when the tram is not at the front of the line', () => {
    it('should not decrement timeTillActionIsFinished', () => {
      const tram = factories.line1Tram();
      const originalTime = tram.timeTillActionIsFinished;
      load.perform(tram);

      expect(tram.timeTillActionIsFinished).toEqual(originalTime);
    });
  });

  describe('when the tram is at the front of the line', () => {
    const station1 = station({id: 1});
    const station2 = station({id: 2});
    const station3 = station({id: 3});
    const segment12 = segment({id: 12, stationId: station1.id, neighborStationId: station2.id});
    const segment23 = segment({id: 23, stationId: station2.id, neighborStationId: station3.id});
    const line = tramLine({segments: [segment12, segment23]});
    let tram: OldTram;
    beforeEach(() => {
      tram = factories.oldTram({tramLine: line});
      tram.setAsLoading();
    });

    it('should decrement timeTillActionIsFinished', () => {
      const originalTime = tram.timeTillActionIsFinished;
      load.perform(tram);
      expect(tram.timeTillActionIsFinished).toEqual(originalTime - 1);
    });

    it('should load passengers that are going in that direction', () => {
      const passenger = factories.passenger({destination: station2});
      tram.currentStation!.addPassenger(passenger);
      load.perform(tram);
      expect(tram.passengers).toEqual([passenger]);
    });

    it('should unload the passengers that are getting off at that station', () => {

    });
  });
});