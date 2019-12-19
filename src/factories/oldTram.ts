import {LINE_1_1, LINE_1_2} from '../fixtures/lines'
import OldTram, {ApiOldTram} from '../lib/simulator/OldTram/OldTram';

export const line1Tram = (props: Partial<ApiOldTram> = {}) => {
  return new OldTram({
    tramLine: LINE_1_1,
    oppositeDirectionTramLine: LINE_1_2,
    currentSegment: (LINE_1_1.segments[0]),
    ...props,
  });
}

export default {
  line1Tram,
};
