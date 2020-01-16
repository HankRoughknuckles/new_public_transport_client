import {getRegistry} from './StationRegistry';
import Station from './Station';

export interface ApiSegment {
  /** database id of the segment */
  id: number;
  /** the id of the current station that the segment "starts" at */
  stationId: number;
  /** the id of the station that the tram will arrive at after it's finished on this segment */
  neighborStationId: number;
  secondsToNeighbor: number;
}

export default class Segment implements ApiSegment {
  id: number;
  stationId: number;
  neighborStationId: number;
  secondsToNeighbor: number;

  constructor({id, stationId, neighborStationId, secondsToNeighbor}: ApiSegment) {
    this.id = id;
    this.stationId = stationId;
    this.neighborStationId = neighborStationId;
    this.secondsToNeighbor = secondsToNeighbor;
  }

  static fromApi(apiSegment: ApiSegment) {
    return new Segment(apiSegment);
  }

  get station(): Station {
    return getRegistry().getStation(this.stationId);
  }

  get neighbor(): Station {
    return getRegistry().getStation(this.neighborStationId);
  }
}
