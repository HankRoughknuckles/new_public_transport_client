import {v1 as uuid} from 'uuid';

export interface ApiPassenger {
  id: string;
  currentLocation: string;
  destination: string;
}

export default class Passenger implements ApiPassenger {
  id: string;
  currentLocation: string;
  destination: string;

  constructor(currentLocation: string, destination: string) {
    this.id = uuid();
    this.currentLocation = currentLocation;
    this.destination = destination;
  }
}
