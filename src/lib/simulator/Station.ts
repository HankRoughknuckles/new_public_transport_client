import OldTram from './OldTram/OldTram';
import Segment from './Segment';

export interface IStation {
  id: number;
  name: string;
  simpleName?: string;
  outgoingSegments?: Segment[];
  trams?: OldTram[];
}

export default class Station implements IStation {
  id: number;
  name: string;
  simpleName: string;
  outgoingSegments: Segment[];
  trams: OldTram[];

   constructor({id, name, outgoingSegments, simpleName, trams}: IStation) {
     this.id = id;
     this.name = name;
     this.simpleName = simpleName || name;
     this.outgoingSegments = outgoingSegments || [];
     this.trams = trams || [];
   }

  acceptIncomingTram(tram: OldTram) {
    this.trams = [...this.trams, tram];
  };
}
