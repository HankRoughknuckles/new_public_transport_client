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

export default {
  station
}
