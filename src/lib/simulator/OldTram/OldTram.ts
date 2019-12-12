import {LINE_1_1, LINE_1_2} from '../../../fixtures/lines'
import { OldTramAction, initial, load, turnAround } from './Actions';
import Segment from '../Segment';
import Tram from '../Tram';
import TramLine from '../TramLine'

// TODO: move this to a global simulator config file
export const OLD_TRAM_CAPACITY = 100;
export const OLD_TRAM_TURN_AROUND_TIME = 600;

export default class OldTram extends Tram {
  type: 'OLD_TRAM';
  capacity: number;
  tramLine: TramLine;
  oppositeDirectionTramLine: TramLine;
  currentAction: OldTramAction;
  location: Segment;
  destination: Segment;
  timeTillActionIsFinished: number;
  passengers: [];

  constructor({tramLine, oppositeDirectionTramLine, capacity, currentAction, location, timeTillActionIsFinished, passengers}: Partial<OldTram>) {
    super();
    this.type = 'OLD_TRAM';
    this.tramLine = tramLine || new TramLine(LINE_1_1);
    this.oppositeDirectionTramLine = oppositeDirectionTramLine || new TramLine(LINE_1_2);
    this.capacity = capacity || OLD_TRAM_CAPACITY;
    this.currentAction = currentAction || initial;
    this.location = location || this.tramLine.segments[0];
    this.timeTillActionIsFinished = timeTillActionIsFinished || 0;
    this.passengers = passengers || [];
    this.destination = this.tramLine.getFinalSegment();
  }

  changeTrackDirection() {
    this.location = this.oppositeDirectionTramLine.segments[0]

    const tempLine = this.tramLine;
    this.tramLine = this.oppositeDirectionTramLine;
    this.oppositeDirectionTramLine = tempLine;
    this.timeTillActionIsFinished = OLD_TRAM_TURN_AROUND_TIME;
    this.currentAction = turnAround;
  }

  goToNextSegment() {
    const nextSegment = this.tramLine.getNextSegment(this.location);
    if (nextSegment) {
      this.location = nextSegment!;
      this.currentAction = load;
      this.timeTillActionIsFinished = this.location.secondsToNeighbor;
    } else {
      this.changeTrackDirection();
    }
  }

  // TODO: maybe put this in the parent class
  next() {
    this.currentAction.perform(this);
  }
}
