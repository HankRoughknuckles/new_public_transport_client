import {Station} from '../api';
const deepMerge = require('deepmerge')

const defaultProps: Station = {
  id: 1,
  name: 'Sidliste Petriny',
}

export function station(props: Partial<Station> = {}): Station {
  return deepMerge(defaultProps, props);
}

export default {
  station
}
