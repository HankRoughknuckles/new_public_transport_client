import {LINE_1_1, LINE_1_2} from '../fixtures/lines'
import { threeStationLine } from './tramLine';
import OldTram, {ApiOldTram} from '../lib/simulator/OldTram/OldTram';
import TramLine from '../lib/simulator/TramLine';

const defaultProps = {
};

export function oldTram(props: Partial<ApiOldTram> = {}) {
  const line = threeStationLine()
  return new OldTram({
    ...defaultProps,
    tramLine: line,
    currentSegment: line.segments[0],
    ...props,
  });
}

export function line1Tram(props: Partial<ApiOldTram> = {}) {
  return new OldTram({
    tramLine: new TramLine(LINE_1_1),
    oppositeDirectionTramLine: new TramLine(LINE_1_2),
    currentSegment: (LINE_1_1.segments[0]),
    ...props,
  });
}

export default {
  oldTram,
  line1Tram,
};
