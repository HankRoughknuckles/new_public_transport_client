import OldTram from '../OldTram';
import {move} from './index';

export default {
  type: 'load',
  duration: 10,
  perform: (tram: OldTram) => {
    if (tram.timeTillActionIsFinished === 0) {
      tram.currentAction = move;
      return;
    }
    if (tram.isAbleToLoadPassengers) {
      tram.timeTillActionIsFinished = tram.timeTillActionIsFinished - 1;
      loadPassengers(tram);
      unloadPassengers(tram);
    }
  }
}

function loadPassengers(tram: OldTram) {
  if (!tram.isAbleToLoadPassengers) return;
  const station = tram.currentStation!;
  const passengersToLoad = station
    .getPassengersGoingInDirectionOf(tram)
    .slice(0, tram.remainingSpace);
  tram.addPassengers(passengersToLoad);
  station.removePassengersById(passengersToLoad.map(p => p.id));
}

function unloadPassengers(tram: OldTram) {
  if (!tram.isAbleToLoadPassengers) return;
  const passengersToUnload = tram.getPassengersGettingOffAt(tram.currentStation!);
  tram.removePassengersById(passengersToUnload.map(p => p.id));
  tram.currentStation!.addPassengers(passengersToUnload);
}
