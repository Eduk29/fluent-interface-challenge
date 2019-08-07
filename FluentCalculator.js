export default class FluentCalculator {
  
  constructor(number) {
    if (!number) {
      this.number = 0;
    } else {
      this.number = number;
    }
  }
  
  equals() {
    return this.number;
  }

  plus(value) {
    this.number = this.number + value;
    return this;
  }

  minus(value) {
    this.number = this.number - value;
    return this;
  }

  times(value) {
    this.number = this.number * value;
    return this;
  }

  dividedBy(value) {
    this.number = this.number / value;
    return this;
  }
}

export function createCalculator(number) {
  return new FluentCalculator(number);
}
