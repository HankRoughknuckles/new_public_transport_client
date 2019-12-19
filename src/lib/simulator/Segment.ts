export default interface Segment {
  /** database id of the segment */
  id: number;
  /** the id of the current station that the segment "starts" at */
  stationId: number;
  /** the id of the station that the tram will arrive at after it's finished on this segment */
  neighborStationId: number;
  secondsToNeighbor: number;
}

