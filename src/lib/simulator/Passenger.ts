import {v1 as uuid} from 'uuid';

export default class Passenger {
  id: string;
  currentLocation: string;
  destination: string;

  constructor(currentLocation: string, destination: string) {
    this.id = uuid();
    this.currentLocation = currentLocation;
    this.destination = destination;
  }
}
