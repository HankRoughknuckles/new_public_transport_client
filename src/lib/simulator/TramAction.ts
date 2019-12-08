import Tram from './Tram';

export default interface TramAction {
  type: string;
  duration: number;
  perform: (tram: Tram) => void;
}
