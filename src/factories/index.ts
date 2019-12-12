import {default as oldTram} from './oldTram';
import {default as rootState} from './rootState';
import {default as station} from './station';
import {default as trackSegment} from './trackSegment';

export default {
  ...oldTram,
  ...rootState,
  ...station,
  ...trackSegment,
};
