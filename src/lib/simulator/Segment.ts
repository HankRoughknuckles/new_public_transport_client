// TODO: make this into a class
// TODO: make convenience method segment.station, segment.neighbor which will
//      treturn actual station objects
export default interface Segment {
  /** database id of the segment */
  id: number;
  /** the id of the current station that the segment "starts" at */
  stationId: number;
  /** the id of the station that the tram will arrive at after it's finished on this segment */
  neighborStationId: number;
  secondsToNeighbor: number;
}
