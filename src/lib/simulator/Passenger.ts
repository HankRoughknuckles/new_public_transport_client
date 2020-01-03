import {v1 as uuid} from 'uuid';

import Station from './Station';

export interface ApiPassenger {
  id?: string;
  currentLocation: Station;
  destination: Station;
}

export default class Passenger implements ApiPassenger {
  id: string;
  currentLocation: Station;
  destination: Station;

  constructor({id, currentLocation, destination}: ApiPassenger) {
    this.id = id || uuid();
    this.currentLocation = currentLocation;
    this.destination = destination;
  }
}
