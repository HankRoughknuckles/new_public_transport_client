import {LINE_1_1} from '../../../../fixtures/lines';
import {load, move} from './index';
import OldTram from '../OldTram';

describe('The move action', () => {
  describe('switching actions', () => {
    it('should not occur if current task is not finished (moving is still in progress)', () => {
      const tram = new OldTram({currentAction: move, timeTillActionIsFinished: 5});
      move.perform(tram);

      expect(tram.currentAction).toEqual(move);
    });

    it('should occur when timeTillActionIsFinished is 0 when this is called', () => {
      const tram = new OldTram({currentAction: move, timeTillActionIsFinished: 0});
      move.perform(tram);

      expect(tram.currentAction).toEqual(load);
    });
  });

  it('should decrement timeTillActionIsFinished', () => {
    const tram = new OldTram({currentAction: move, timeTillActionIsFinished: 5});
    move.perform(tram);

    expect(tram.timeTillActionIsFinished).toEqual(4);
  });

  it('should change the location to next one on the line when finished', () => {
    const tram = new OldTram({
      currentAction: move,
      timeTillActionIsFinished: 0,
      tramLine: LINE_1_1,
      location: LINE_1_1.segments[0],
    });
    move.perform(tram);

    // TODO: make location either be a station or a segment
    expect(tram.location.stationName).toEqual(LINE_1_1.segments[0].nameOfNeighbor);
  });
});
