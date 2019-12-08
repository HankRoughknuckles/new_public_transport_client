import Tram from '../Tram';
import TramAction from '../TramAction';
import {initial} from './Actions';
import {Segment, TramLine, LINE_1_1} from '../../../fixtures/lines'

// TODO: move this to a global simulator config file
export const OLD_TRAM_CAPACITY = 100;

export default class OldTram extends Tram {
  type: 'OLD_TRAM';
  capacity: number;
  tramLine: TramLine;
  currentAction: TramAction;
  location: Segment;
  timeTillActionIsFinished: number;
  passengers: [];

  constructor({tramLine, capacity, currentAction, location, timeTillActionIsFinished, passengers}: Partial<Tram>) {
    super();
    this.type = 'OLD_TRAM';
    this.tramLine = tramLine || LINE_1_1;
    this.capacity = capacity || OLD_TRAM_CAPACITY;
    this.currentAction = currentAction || initial;
    this.location = location || this.tramLine.segments[0];
    this.timeTillActionIsFinished = timeTillActionIsFinished || 0;
    this.passengers = passengers || [];
  }

  // TODO: maybe put this in the parent class
  next() {
    this.currentAction.perform(this);
  }
}
