import Segment from './Segment';

export default interface Station {
  id?: number;
  name: string;
  outgoingSegments: Segment[];
}

