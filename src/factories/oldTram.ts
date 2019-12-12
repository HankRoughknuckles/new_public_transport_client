import {LINE_1_1, LINE_1_2} from '../fixtures/lines'
import OldTram from '../lib/simulator/OldTram/OldTram';
import TramLine from '../lib/simulator/TramLine'

export const line1Tram = (props: Partial<OldTram> = {}) => {
  return new OldTram({
    tramLine: new TramLine(LINE_1_1),
    oppositeDirectionTramLine: new TramLine(LINE_1_2),
    location: LINE_1_1.segments[0],
    ...props,
  });
}

export default {
  line1Tram,
};
