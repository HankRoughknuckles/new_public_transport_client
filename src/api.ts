export interface TrackSegment {
  id?: number;
  start: Station;
  end: Station;
  travelTimeInSeconds: number;
}

export interface Station {
  id?: number;
  name: string;
}
