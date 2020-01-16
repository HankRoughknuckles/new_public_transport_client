import Station from './Station';
import {keyBy} from 'lodash';

export class StationRegistry {
  public stations: {[id: number]: Station};

  constructor(stations: Station[] = []) {
    this.stations = keyBy(stations, 'id');
  }

  public addStation(station: Station) {
    this.stations[station.id!] = station;
  }

  public getStation(id: number) {
    return this.stations[id];
  };
}

let registry: StationRegistry = new StationRegistry();
export function getRegistry() {
  return registry;
}

export function initializeRegistry(stations: Station[] = []) {
  registry = new StationRegistry(stations);
}
