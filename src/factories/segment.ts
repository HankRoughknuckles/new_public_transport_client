import deepMerge from 'deepmerge';

import Segment, {ApiSegment} from '../lib/simulator/Segment';

const defaultProps: ApiSegment = {
  id: 1,
  stationId: 1,
  neighborStationId: 2,
  secondsToNeighbor: 120,
}

export function segment(props: Partial<ApiSegment> = {}): Segment {
  return new Segment(deepMerge(defaultProps, props))
}

export function blankTrackSegment(): Segment {
  return new Segment({
    id: -1,
    stationId: -1,
    neighborStationId: -1,
    secondsToNeighbor: -1,
  })
}

export default {
  segment,
  blankTrackSegment,
}
