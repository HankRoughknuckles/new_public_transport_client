import {LINE_1_1, LINE_1_2} from '../../../../fixtures/lines';
import {load, move, turnAround} from './';
import OldTram from '../OldTram';
import TramLine from '../../TramLine';
import factories from '../../../../factories';

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
      tramLine: new TramLine(LINE_1_1),
      location: LINE_1_1.segments[0],
    });
    move.perform(tram);

    expect(tram.location.stationName).toEqual(LINE_1_1.segments[0].nameOfNeighbor);
  });

  describe('when the tram is at the end of the line', () => {
    it('should set the line to opposite direction counterpart', () => {
      const line = new TramLine(LINE_1_1)
      const oppositeLine = new TramLine(LINE_1_2)
      const tram = factories.line1Tram({currentAction: move, location: line.getFinalSegment()});
      move.perform(tram);

      expect(tram.location.nameOfNeighbor).toEqual(oppositeLine.segments[0].nameOfNeighbor)
    });

    it('should set the action as "turning around"', () => {
      const line = new TramLine(LINE_1_1)
      const tram = factories.line1Tram({currentAction: move, location: line.getFinalSegment()});
      move.perform(tram);

      expect(tram.currentAction.type).toEqual(turnAround.type);
    });
  });
});
