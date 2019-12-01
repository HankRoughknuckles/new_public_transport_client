import {default as rootState} from './rootState';
import {default as station} from './station';
import {default as trackSegment} from './trackSegment';

export default {
  ...rootState,
  ...station,
  ...trackSegment,
};
