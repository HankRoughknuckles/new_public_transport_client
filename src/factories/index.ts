import {default as oldTram} from './oldTram';
import {default as rootState} from './rootState';
import {default as station} from './station';
import {default as segment} from './segment';

export default {
  ...oldTram,
  ...rootState,
  ...station,
  ...segment,
};
