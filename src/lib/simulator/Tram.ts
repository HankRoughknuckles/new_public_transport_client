import {v1 as uuid} from 'uuid';
import Passenger from './Passenger';
import TramAction from './TramAction';
import {TramLine, Segment} from '../../fixtures/lines';

export type TramType = 'OLD_TRAM' | 'NEW_TRAM';

export default abstract class Tram {
  id: string;
  abstract type: TramType;
  abstract capacity: number;
  abstract tramLine: TramLine;
  abstract currentAction: TramAction;
  abstract location: Segment;
  abstract timeTillActionIsFinished: number;
  abstract passengers: [];

  constructor() {
    this.id = uuid();
  }

  /**
   * Make the tram do its next move - e.g., load up passengers, move to next
   * station, etc.
   */
  abstract next(): void;
}
