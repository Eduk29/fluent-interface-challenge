const plus = (acc, value) => {
  return acc + value;
};

const minus = (acc, value) => {
  return acc - value;
};

const times = (acc, value) => {
  return acc * value;
};

const dividedBy = (acc, value) => {
  return acc / value;
};

const fluentCalculator = number => ({
  plus(value) {
    return fluentCalculator(plus(number, value));
  },

  minus(value) {
    return fluentCalculator(minus(number, value));
  },

  times(value) {
    return fluentCalculator(times(number, value));
  },

  dividedBy(value) {
    return fluentCalculator(dividedBy(number, value));
  },

  equals() {
    return number;
  }
});

export const createCalculator = number => {
  if (!number) {
    number = 0;
  }

  return fluentCalculator(number);
};
