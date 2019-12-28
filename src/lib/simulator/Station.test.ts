import {initializeRegistry} from './StationRegistry';
import factories from '../../factories';

describe('Station', () => {
  describe('getPassengersGoingInDirectionOf()', () => {
    const station1 = factories.station({id: 1});
    const station2 = factories.station({id: 2});
    const station3 = factories.station({id: 3});
    const segment12 = factories.segment({id: 12, stationId: station1.id, neighborStationId: station2.id});
    const segment23 = factories.segment({id: 23, stationId: station2.id, neighborStationId: station3.id});
    const line = factories.tramLine({segments: [segment12, segment23]});
    initializeRegistry([station1, station2, station3]);

    it('should return passengers whose destination still remains on the tram line', () => {
      const passengerTo2 = factories.passenger({currentLocation: station1, destination: station2})
      const passengerTo3 = factories.passenger({currentLocation: station1, destination: station3})
      station1.passengers = [passengerTo2, passengerTo3];
      const tram = factories.oldTram({tramLine: line, currentSegment: segment12});

      expect(station1.getPassengersGoingInDirectionOf(tram)).toEqual([passengerTo2, passengerTo3]);
    });
  });
});
