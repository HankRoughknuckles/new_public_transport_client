import {OldTramAction} from './';
import OldTram from '../OldTram';

export const initial: OldTramAction = {
  type: 'initial',
  duration: 0,
  perform: (state: OldTram) => {}
}

export default initial
