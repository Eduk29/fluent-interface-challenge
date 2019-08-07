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
    if (!this.number) {
      return this;
    }
    return (this.number = this.number + value);
  }

  minus(value) {
    if (!this.number) {
      return this;
    }
    this.number = this.number - value;
  }

  times(value) {
    if (!this.number) {
      return this;
    }
    this.number = this.number * value;
  }

  dividedBy(value) {
    if (!this.number) {
      return this;
    }
    this.number = this.number / value;
  }
}

export function createCalculator(number) {
  return new FluentCalculator(number);
}
