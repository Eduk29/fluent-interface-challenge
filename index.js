import { createCalculator } from './FluentCalculator.js'

const calc = createCalculator(10)

calc.plus(1);
console.log('Sum: ', calc.equals());

// calc.minus(1);
// console.log('Sub: ', calc.equals());

// calc.times(3);
// console.log('Mul: ', calc.equals());

// calc.dividedBy(2);
// console.log('Div: ', calc.equals());

//console.log(calc.plus(12).times(3).minus(1).dividedBy(2).equals())
console.log(calc)