import deepMerge from 'deepmerge';

import {TrackSegment} from '../api';
import {station} from './station';

const defaultProps: TrackSegment = {
  start: station({id: 1, name: 'Sidliste Petriny'}),
  end: station({id: 2, name: 'Petriny'}),
  travelTimeInSeconds: 120,
}

export function trackSegment(props: Partial<TrackSegment> = {}): TrackSegment {
  return deepMerge(defaultProps, props);
}

export function blankTrackSegment(): TrackSegment {
  return {
    start: {
      name: '',
    },
    end: {
      name: '',
    },
    travelTimeInSeconds: -1,
  }
}

export default {
  trackSegment,
  blankTrackSegment,
}
