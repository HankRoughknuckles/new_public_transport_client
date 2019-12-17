import Station from './Station';
import {StationRegistry} from './StationRegistry';

describe('StationRegistry', () => {
  describe('the constructor', () => {
    it('should add them to the object with keys being the simpleName', () => {
      const stationA = new Station({name: 'a'});
      const stationB = new Station({name: 'b'});

      const registry = new StationRegistry([
        stationA,
        stationB,
      ]);

      expect(registry.stations).toEqual({
        'a': stationA,
        'b': stationB,
      });
    });
  });
});
