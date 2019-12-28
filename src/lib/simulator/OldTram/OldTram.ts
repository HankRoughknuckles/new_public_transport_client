import {LINE_1_1, LINE_1_2} from '../../../fixtures/lines'
import { OldTramAction, initial, load, turnAround } from './Actions';
import {getRegistry} from '../StationRegistry';
import Passenger from '../Passenger';
import Segment from '../Segment';
import Station from '../Station';
import Tram from '../Tram';
import TramLine from '../TramLine'

// TODO: move this to a global simulator config file
export const OLD_TRAM_CAPACITY = 100;
export const OLD_TRAM_TURN_AROUND_TIME = 600;

export interface ApiOldTram {
  type: 'OLD_TRAM';
  capacity: number;
  tramLine: TramLine;
  oppositeDirectionTramLine: TramLine;
  currentAction: OldTramAction;
  currentSegment: Segment;
  destination: Segment;
  timeTillActionIsFinished: number;
  passengers: Passenger[];
}

export default class OldTram extends Tram implements ApiOldTram {
  type: 'OLD_TRAM';
  capacity: number;
  tramLine: TramLine;
  oppositeDirectionTramLine: TramLine;
  currentAction: OldTramAction;
  currentSegment: Segment;
  destination: Segment;
  timeTillActionIsFinished: number;
  passengers: Passenger[];

  constructor({tramLine, oppositeDirectionTramLine, capacity, currentAction, currentSegment, timeTillActionIsFinished, passengers}: Partial<OldTram>) {
    super();
    this.type = 'OLD_TRAM';
    this.tramLine = tramLine || new TramLine(LINE_1_1);
    this.oppositeDirectionTramLine = oppositeDirectionTramLine || new TramLine(LINE_1_2);
    this.capacity = capacity || OLD_TRAM_CAPACITY;
    this.currentAction = currentAction || initial;
    this.currentSegment = currentSegment || this.tramLine.segments[0];
    this.timeTillActionIsFinished = timeTillActionIsFinished || 0;
    this.passengers = passengers || [];
    this.destination = this.tramLine.getFinalSegment();
  }

  setAsLoading() {
    this.currentAction = load;
    this.currentStation!.acceptIncomingTram(this);
    this.timeTillActionIsFinished = load.duration;
  }

  changeTrackDirection() {
    this.currentSegment = this.oppositeDirectionTramLine.segments[0]

    const tempLine = this.tramLine;
    this.tramLine = this.oppositeDirectionTramLine;
    this.oppositeDirectionTramLine = tempLine;
    this.timeTillActionIsFinished = OLD_TRAM_TURN_AROUND_TIME;
    this.currentAction = turnAround;
  }

  get currentStation(): Station | undefined {
    if (this.currentAction !== load) return undefined;
    return getRegistry().getStation(this.currentSegment.stationId);
  }

  /** returns true if the tram is at the front of the queue in the station and
   * is currently doing the load action */
  get isAbleToLoadPassengers() {
    if (this.currentAction !== load) return false;
    if (!this.currentStation) return false;
    return this.currentStation!.trams[0] === this;
  }

  get remainingStationsTillEnd(): Station[] {
    const allLineSegments = this.tramLine.segments;
    const currentSegmentIndex = allLineSegments.findIndex(seg => seg.id === this.currentSegment.id);
    // TODO: if already left the station, don't count current station - i.e, use
    // index + 1
    return [
      ...allLineSegments.slice(currentSegmentIndex).map(seg => getRegistry().getStation(seg.stationId)),
      this.tramLine.finalStation
    ]
  }

  pullIntoNextStation() {
    const nextSegment = this.tramLine.getNextSegment(this.currentSegment);
    this.currentSegment = nextSegment!;
    this.setAsLoading();
  }

  goToNextSegment() {
    const nextSegment = this.tramLine.getNextSegment(this.currentSegment);
    if (nextSegment) {
      this.pullIntoNextStation();
    } else {
      this.changeTrackDirection();
    }
  }

  public addPassengers(passengers: Passenger[]) {
    this.passengers = [...this.passengers, ...passengers];
  }

  // TODO: maybe put this in the parent class
  next() {
    this.currentAction.perform(this);
  }
}
