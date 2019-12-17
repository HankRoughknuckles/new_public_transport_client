import {LINE_1_1, LINE_1_2} from '../../../../fixtures/lines';
import {allStations} from '../../../../fixtures/lines/line1';
import {getStation, initializeRegistry} from '../../StationRegistry';
import {load, move, turnAround} from './';
import OldTram from '../OldTram';
import TramLine from '../../TramLine';
import factories from '../../../../factories';

describe('The move action', () => {
  beforeEach(() => initializeRegistry(allStations));

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

  it('should change the currentSegment to next segment on the line when duration is up', () => {
    const tram = factories.line1Tram({
      currentAction: move,
      timeTillActionIsFinished: 0,
    });
    move.perform(tram);

    expect(tram.currentSegment.stationName).toEqual(LINE_1_1.segments[0].nameOfNeighbor);
  });

  fit('should move two trams into a station in the order they arrive', () => {
    const tram1 = factories.line1Tram({currentAction: move, timeTillActionIsFinished: 0});
    const tram2 = factories.line1Tram({currentAction: move, timeTillActionIsFinished: 1});
    const nextStation = getStation(tram1.currentSegment.nameOfNeighbor);
    move.perform(tram1); // move tram 1 in
    move.perform(tram2);
    expect(nextStation.trams).toEqual([tram1]);
    move.perform(tram2); // move tram2 in
    expect(nextStation.trams).toEqual([tram1, tram2]);
  });

  describe('when the tram is at the end of the line', () => {
    it('should set the line to opposite direction counterpart', () => {
      const line = new TramLine(LINE_1_1)
      const oppositeLine = new TramLine(LINE_1_2)
      const tram = factories.line1Tram({currentAction: move, currentSegment: line.getFinalSegment()});
      move.perform(tram);

      expect(tram.currentSegment.nameOfNeighbor).toEqual(oppositeLine.segments[0].nameOfNeighbor)
    });

    it('should set the action as "turning around"', () => {
      const line = new TramLine(LINE_1_1)
      const tram = factories.line1Tram({currentAction: move, currentSegment: line.getFinalSegment()});
      move.perform(tram);

      expect(tram.currentAction.type).toEqual(turnAround.type);
    });
  });
});
