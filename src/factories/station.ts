import {
  API_DELNICKA,
  API_MANINY,
  apiAllStations
} from '../fixtures/lines/line1';
import Station, {ApiStation} from '../lib/simulator/Station';

const deepMerge = require('deepmerge')

const defaultProps: ApiStation = {
  id: 1,
  name: 'Sidliste Petriny',
  simpleName: 'Sidliste Petriny',
  outgoingSegments: [],
  trams: [],
}

export function station(props: Partial<ApiStation> = defaultProps): Station {
  return new Station(deepMerge(defaultProps, props));
}

export function delnickaStation(props: Partial<ApiStation> = defaultProps): Station {
  return station({
    ...props,
    id: API_DELNICKA.id,
    name: API_DELNICKA.name,
    simpleName: API_DELNICKA.simpleName
  })
}

export function maninyStation(props: Partial<ApiStation> = defaultProps): Station {
  return station({
    ...props,
    id: API_MANINY.id,
    name: API_MANINY.name,
    simpleName: API_MANINY.simpleName
  })
}

export function allStations(): Station[] {
  return apiAllStations.map(station => new Station(station));
}

export default {
  station,
  delnickaStation,
  maninyStation,
  allStations,
}
