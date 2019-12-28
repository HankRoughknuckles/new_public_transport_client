import OldTram from './OldTram/OldTram';
import Passenger from './Passenger';
import Segment from './Segment';

// TODO: rename to ApiStation
export interface IStation {
  id: number;
  name: string;
  simpleName?: string;
  outgoingSegments?: Segment[];
  trams?: OldTram[];
}

export default class Station implements IStation {
  id: number;
  name: string;
  simpleName: string;
  outgoingSegments: Segment[];
  trams: OldTram[];
  passengers: Passenger[];

  constructor({id, name, outgoingSegments, simpleName, trams}: IStation) {
    this.id = id;
    this.name = name;
    this.simpleName = simpleName || name;
    this.outgoingSegments = outgoingSegments || [];
    this.trams = trams || [];
    // TODO: arrange passengers based on where they're going
    this.passengers = [];
  }

  public acceptIncomingTram(tram: OldTram) {
    this.trams = [...this.trams, tram];
  };

  public addPassenger(passenger: Passenger) {
    this.passengers = [...this.passengers, passenger];
  };

  // TODO: write tests around this
  getPassengersGoingInDirectionOf(tram: OldTram) {
    return tram.remainingStationsTillEnd
      .map((station) => this.passengers.filter(passenger => passenger.destination.id === station.id))
      .reduce((acc, passengers) => ([
        ...acc,
        ...passengers
      ]), [])
  };
}
