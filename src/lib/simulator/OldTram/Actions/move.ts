import TramAction from '../../TramAction';
import Tram from '../../Tram';
import {load} from './index';

export const move: TramAction = {
  type: 'move',
  duration: 120,
  perform: (tram: Tram) => {
    if (tram.timeTillActionIsFinished === 0) {
      tram.currentAction = load;
      tram.timeTillActionIsFinished = load.duration;
      return tram.next();
    };

    tram.timeTillActionIsFinished = tram.timeTillActionIsFinished - 1;
  },
}

export default move;
