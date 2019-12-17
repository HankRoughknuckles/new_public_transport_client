import Station from './Station';
import {keyBy} from 'lodash';

export class StationRegistry {
  public stations: {[simpleName: string]: Station};

  constructor(stations: Station[] = []) {
    this.stations = keyBy(stations, 'simpleName');
  }

  public addStation(station: Station) {
    this.stations[station.simpleName] = station;
  }
}

let registry: StationRegistry = new StationRegistry();
export function getRegistry() {
  return registry;
}

export function initializeRegistry(stations: Station[] = []) {
  registry = new StationRegistry(stations);
}
