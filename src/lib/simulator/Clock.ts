export default class Clock {
  seconds: number;

  constructor(startingSeconds = 0) {
    this.seconds = startingSeconds;
  }

  increment() {
    this.seconds = this.seconds + 1;
  }
}
