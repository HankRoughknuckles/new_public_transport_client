import OldTram from '../OldTram';

// TODO: having actions separate from the OldTram class  like this may be
// unnecessary, potentially remove them if needed
export const move = {
  type: 'move',
  duration: 120, // TODO: not needed here, try to remove it
  perform: (tram: OldTram) => {
    if (tram.timeTillActionIsFinished === 0) {
      return tram.goToNextSegment();
    };

    tram.timeTillActionIsFinished = tram.timeTillActionIsFinished - 1;
  },
}

export default move;
