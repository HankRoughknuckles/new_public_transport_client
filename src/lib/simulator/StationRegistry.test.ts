import {StationRegistry} from './StationRegistry';
import factories from '../../factories';

describe('StationRegistry', () => {
  describe('the constructor', () => {
    it('should add them to the object with keys being the simpleName', () => {
      const stationA = factories.station({id: 1});
      const stationB = factories.station({id: 2});

      const registry = new StationRegistry([
        stationA,
        stationB,
      ]);

      expect(registry.stations).toEqual({
        '1': stationA,
        '2': stationB,
      });
    });
  });
});
