import {v1 as uuid} from 'uuid';

import Passenger from './Passenger';
import Segment from './Segment';
import TramLine from './TramLine'

export type TramType = 'OLD_TRAM' | 'NEW_TRAM';

export default abstract class Tram {
  id: string;
  abstract type: TramType;
  abstract capacity: number;
  abstract tramLine: TramLine;
  abstract destination: Segment;
  abstract currentSegment: Segment;
  abstract timeTillActionIsFinished: number;
  abstract passengers: Passenger[];

  constructor() {
    this.id = uuid();
  }

  /**
   * Make the tram do its next move - e.g., load up passengers, move to next
   * station, etc.
   */
  abstract next(): void;

  /** Sets the tram's currentSegment to the next segment it should go to */
  abstract goToNextSegment(): void;
}
