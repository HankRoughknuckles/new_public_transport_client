import { apiAllStations } from '../fixtures/lines/line1';
import Station, {IStation} from '../lib/simulator/Station';

const deepMerge = require('deepmerge')

const defaultProps: IStation = {
  id: 1,
  name: 'Sidliste Petriny',
  simpleName: 'Sidliste Petriny',
  outgoingSegments: [],
  trams: [],
}

export function station(props: Partial<IStation> = defaultProps): Station {
  return new Station(deepMerge(defaultProps, props));
}

export function allStations(): Station[] {
  return apiAllStations.map(station => new Station(station));
}

export default {
  station,
  allStations,
}
