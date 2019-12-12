import OldTram from '../OldTram';

export {default as initial} from './initial';
export {default as load} from './load';
export {default as move} from './move';
export {default as turnAround} from './turnAround';

export interface OldTramAction {
  type: string;
  duration: number;
  perform: (tram: OldTram) => void;
};
