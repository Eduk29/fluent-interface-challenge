import { equal } from "assert";
import { createCalculator } from "./FluentCalculator";
// import FluentCalculator, { createCalculator } from './FluentCalculator.js'

describe("createCalculator", () => {
  it("should be a function", () => {
    equal(typeof createCalculator, "function");
  });
});

describe("FluentCalculator", () => {
  it("may receive an initial value", () => {
    const calc = createCalculator(10);
    equal(calc.equals(), 10);
  });

  it("should set zero as initial value when it is not defined", () => {
    const calc = createCalculator();
    equal(calc.equals(), 0);
  });

  context("#plus", () => {
    it("should increment internal value", () => {
      const calc = createCalculator(10);
      equal(calc.plus(5).equals(), 15);
    });
  });

  context("#minus", () => {
    it("should decrement internal value", () => {
      const calc = createCalculator(6);
      equal(calc.minus(2).equals(), 4);
    });
  });

  context("#dividedBy", () => {
    it("should divide internal value", () => {
      const calc = createCalculator(8);
      equal(calc.dividedBy(2).equals(), 4);
    });
  });

  context("#times", () => {
    it("should multiply internal value", () => {
      const calc = createCalculator(7);
      equal(calc.times(3).equals(), 21);
    });
  });

  it("should be a cool fluent interface", () => {
    equal(
      createCalculator(10)
        .minus(3)
        .plus(1)
        .dividedBy(2)
        .times(3)
        .equals(),
      12
    );
  });
});