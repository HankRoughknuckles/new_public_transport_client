import Clock from './Clock';

export default class Simulator {
  clock: Clock;

  constructor() {
    this.clock = new Clock();
  }

  get time() {
    return this.clock.seconds;
  }

  tick() {
    this.clock.increment();
    // move trams, etc.
  }
}
