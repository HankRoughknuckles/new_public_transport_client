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

  get finalSegment() {
    return this.segments[this.segments.length - 1];
  }

  get stations(): Station[] {
    const allExceptLastStation = this.segments.map(segment => segment.station);
    const lastStation = this.finalSegment.neighbor;
    return [...allExceptLastStation, lastStation];
  }

  get finalStation(): Station {
    return this.stations[this.stations.length - 1];
  }
}
