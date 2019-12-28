import OldTram from '../OldTram';
import Passenger from '../../Passenger';

export default {
  type: 'load',
  duration: 10,
  perform: (tram: OldTram) => {
    if (tram.isAbleToLoadPassengers) {
      tram.timeTillActionIsFinished = tram.timeTillActionIsFinished - 1;
      boardPassengers(tram);
    }
  }
}

function boardPassengers(tram: OldTram) {
  if (!tram.isAbleToLoadPassengers) return;
  const station = tram.currentStation!;
  const passengersToLoad = station.getPassengersGoingInDirectionOf(tram);
  tram.addPassengers(passengersToLoad);
  station.removePassengersById(passengersToLoad.map(p => p.id));
}
