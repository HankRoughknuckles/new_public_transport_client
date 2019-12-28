import { getRegistry } from './StationRegistry';
import Segment from './Segment';
import Station from './Station';

export interface ITramLine{
  id?: number;
  name: string;
  segments: Segment[];
}

export default class TramLine implements ITramLine {
  id?: number;
  name: string;
  segments: Segment[];

  constructor(tramLine: ITramLine) {
    this.id = tramLine.id;
    this.name = tramLine.name || '';
    this.segments = tramLine.segments || [];
  }

  public getNextSegment(segment: Segment): Segment | undefined {
    return this.segments.find(s => s.stationId === segment.neighborStationId)
  }

  // TODO: make this a getter
  public getFinalSegment() {
    return this.segments[this.segments.length - 1];
  }

  // TODO: eventually make a Segment class that will take in the api object
  // literal and give the actual objects
  get stations(): Station[] {
    const allExceptLastStation = this.segments.map(segment => getRegistry().getStation(segment.stationId));
    const lastStation = getRegistry().getStation(this.getFinalSegment().neighborStationId);
    return [...allExceptLastStation, lastStation];
  }

  get finalStation(): Station {
    return this.stations[this.stations.length - 1];
  }
}
