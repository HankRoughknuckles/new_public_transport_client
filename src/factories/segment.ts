import deepMerge from 'deepmerge';

import Segment from '../lib/simulator/Segment';

const defaultProps: Segment = {
  id: 1,
  stationName: 1,
  nameOfNeighbor: 2,
  secondsToNeighbor: 120,
}

export function segment(props: Partial<Segment> = {}): Segment {
  return deepMerge(defaultProps, props);
}

export function blankTrackSegment(): Segment {
  return {
    id: -1,
    stationName: -1,
    nameOfNeighbor: -1,
    secondsToNeighbor: -1,
  }
}

export default {
  segment,
  blankTrackSegment,
}
