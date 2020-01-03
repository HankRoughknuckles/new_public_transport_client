import OldTram from '../OldTram';

export default {
  type: 'load',
  duration: 10,
  perform: (tram: OldTram) => {
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
  const passengersToLoad = station.getPassengersGoingInDirectionOf(tram);
  tram.addPassengers(passengersToLoad);
  station.removePassengersById(passengersToLoad.map(p => p.id));
}

function unloadPassengers(tram: OldTram) {
  if (!tram.isAbleToLoadPassengers) return;
  const passengersToUnload = tram.getPassengersGettingOffAt(tram.currentStation!);
  tram.removePassengersById(passengersToUnload.map(p => p.id));
  tram.currentStation!.addPassengers(passengersToUnload);
}
