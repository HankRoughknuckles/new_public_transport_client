import { initializeRegistry } from '../lib/simulator/StationRegistry';
import factories from '../factories';

export function setupStationRegistry() {
  initializeRegistry(factories.allStations());
}
