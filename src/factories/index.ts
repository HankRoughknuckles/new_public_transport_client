import {default as oldTram} from './oldTram';
import {default as passenger} from './passenger';
import {default as rootState} from './rootState';
import {default as station} from './station';
import {default as segment} from './segment';
import {default as tramLine} from './tramLine';

export default {
  ...oldTram,
  ...passenger,
  ...rootState,
  ...station,
  ...segment,
  ...tramLine,
};
