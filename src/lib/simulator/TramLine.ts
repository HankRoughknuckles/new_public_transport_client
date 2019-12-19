import Segment from './Segment';

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

  public getFinalSegment() {
    return this.segments[this.segments.length - 1];
  }
}
