export interface Station {
  id?: number;
  name: string;
  outgoingSegments: Segment[];
}

export interface Segment {
  id?: number;
  stationName: string;
  nameOfNeighbor: string;
  secondsToNeighbor: number;
}

export interface TramLine {
  id?: number;
  name: string;
  segments: Segment[];
}

export {LINE_1_1, LINE_1_2} from './line1';
export {LINE_2_1, LINE_2_2} from './line2';
export {LINE_3_1, LINE_3_2} from './line3';
