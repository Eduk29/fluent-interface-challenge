import { createCalculator } from './FluentCalculator.js'

const calc = createCalculator(10);

console.log(calc.plus(12).times(3).minus(1).dividedBy(2).equals());
console.log(calc);