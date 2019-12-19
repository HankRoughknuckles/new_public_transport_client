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

  public emptyAllStations() {
    for (let stationId in this.stations) {
      this.stations[stationId].removeAllTrams();
    }
  }
}

let registry: StationRegistry = new StationRegistry();
export function getRegistry() {
  return registry;
}

export function initializeRegistry(stations: Station[] = []) {
  registry = new StationRegistry(stations);
}

// TODO: move this into the registry
export function getStation(id: number) {
  return getRegistry().stations[id];
}
