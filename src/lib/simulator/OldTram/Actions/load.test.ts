import load from './load';
import { setupStationRegistry } from '../../../../testUtils';
import OldTram from '../OldTram';
import factories from '../../../../factories';
import {segment} from '../../../../factories/segment';
import {station} from '../../../../factories/station';
import {tramLine} from '../../../../factories/tramLine';

describe('the Load action', () => {
  beforeEach(() => setupStationRegistry());

  describe('when the tram is not at the front of the line', () => {
    it('should not decrement timeTillActionIsFinished', () => {
      const tram = factories.line1Tram();
      const originalTime = tram.timeTillActionIsFinished;
      load.perform(tram);

      expect(tram.timeTillActionIsFinished).toEqual(originalTime);
    });
  });

  describe('when the tram is at the front of the line', () => {
    const currentStation = station({id: 1});
    const nextStation = station({id: 2});
    const segment12 = segment({id: 12, stationId: currentStation.id, neighborStationId: nextStation.id});
    const line = tramLine({segments: [segment12]});
    let tram: OldTram;
    beforeEach(() => {
      tram = factories.oldTram({currentSegment: segment12, tramLine: line});
      tram.setAsLoading();
    });

    it('should decrement timeTillActionIsFinished', () => {
      const originalTime = tram.timeTillActionIsFinished;
      load.perform(tram);
      expect(tram.timeTillActionIsFinished).toEqual(originalTime - 1);
    });

    describe('when the tram is full', () => {
      beforeEach(() => {
        tram.passengers = Array(tram.capacity).fill(factories.passenger());
      });

      it('should not load anyone', () => {
        const newPassenger = factories.passenger({destination: nextStation});
        tram.currentStation!.addPassenger(newPassenger);
        expect(tram.passengers.length).toEqual(100)
        load.perform(tram);

        expect(tram.currentStation!.passengers).toEqual([newPassenger]);
        expect(tram.passengers.length).toEqual(100) //should not have changed
      });
    });

    describe('loading up passengers', () => {
      it('should add passengers to the tram that are going in that direction', () => {
        const passenger = factories.passenger({destination: nextStation});
        tram.currentStation!.addPassenger(passenger);
        load.perform(tram);
        expect(tram.passengers).toEqual([passenger]);
      });

      it('should remove the passengers loaded from the station', () => {
        const passenger = factories.passenger({destination: nextStation});
        tram.currentStation!.addPassenger(passenger);
        load.perform(tram);
        expect(tram.currentStation!.passengers).toEqual([]);
      });
    });

    describe('unloading passengers getting off', () => {
      it('should remove the passengers from the tram', () => {
        const gettingOffPassenger = factories.passenger({destination: currentStation});
        const stayingOnPassenger = factories.passenger({destination: nextStation});
        tram.addPassengers([gettingOffPassenger, stayingOnPassenger]);
        load.perform(tram);
        expect(tram.passengers).toEqual([stayingOnPassenger]);
      });

      it('should put the passenger into the station', () => {
        const gettingOffPassenger = factories.passenger({destination: currentStation});
        const stayingOnPassenger = factories.passenger({destination: nextStation});
        tram.addPassengers([gettingOffPassenger, stayingOnPassenger]);
        load.perform(tram);
        expect(tram.currentStation!.passengers).toEqual([gettingOffPassenger]);
      });

      it('should do it if the tram is 2nd in line', () => {
        const gettingOffPassenger = factories.passenger({destination: currentStation});
        const stayingOnPassenger = factories.passenger({destination: nextStation});
        const gettingOnPassenger = factories.passenger({destination: nextStation});
        tram.currentStation!.addPassenger(gettingOnPassenger);
        tram.addPassengers([gettingOffPassenger, stayingOnPassenger]);
        tram.currentStation!.trams = [
          factories.oldTram(),
          tram
        ]
        load.perform(tram);
        expect(tram.passengers).toEqual([stayingOnPassenger, gettingOnPassenger]);
        expect(tram.currentStation!.passengers).toEqual([gettingOffPassenger]);
      });
    });

    it('should still load passengers after the tram has been waiting', () => {
      const gettingOnPassenger = factories.passenger({destination: nextStation});
      load.perform(tram);
      expect(tram.passengers).toEqual([]); // because person isnt there yet
      tram.currentStation!.addPassenger(gettingOnPassenger); // passenger gets to platform
      load.perform(tram);
      expect(tram.passengers).toEqual([gettingOnPassenger]);
    });
  });
});
