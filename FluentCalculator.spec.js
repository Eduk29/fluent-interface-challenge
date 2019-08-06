import { equal } from 'assert'
import FluentCalculator, { createCalculator } from './FluentCalculator.js'

describe('createCalculator', () => {
  it('should be a function', () => {
    equal(typeof createCalculator, 'function')
  })

  it('should return an instance of FluentCalculator', () => {
    const calc = createCalculator()
    equal(calc instanceof FluentCalculator, true)
  })
})

describe('FluentCalculator', () => {
  it('may receive an initial value', () => {
    const calc = new FluentCalculator(10)
    equal(calc.equals(), 10)
  })

  it('should set zero as initial value when it is not defined', () => {
    const calc = new FluentCalculator()
    equal(calc.equals(), 0)
  })

  context('#plus', () => {
    it('should return current instance', () => {
      const calc = createCalculator()
      equal(calc.plus(), calc)
    })

    it('should increment internal value', () => {
      const calc = createCalculator(10)
      calc.plus(5)
      equal(calc.equals(), 15)
    })
  })

  context('#minus', () => {
    it('should return current instance', () => {
      const calc = createCalculator()
      equal(calc.minus(), calc)
    })

    it('should decrement internal value', () => {
      const calc = createCalculator(6)
      calc.minus(2)
      equal(calc.equals(), 4)
    })
  })

  context('#dividedBy', () => {
    it('should return current instance', () => {
      const calc = createCalculator()
      equal(calc.dividedBy(), calc)
    })

    it('should devide internal value', () => {
      const calc = createCalculator(8)
      calc.dividedBy(2)
      equal(calc.equals(), 4)
    })
  })

  context('#times', () => {
    it('should return current instance', () => {
      const calc = createCalculator()
      equal(calc.times(), calc)
    })

    it('should multiply internal value', () => {
      const calc = createCalculator(7)
      calc.times(3)
      equal(calc.equals(), 21)
    })
  })

  it('should be a cool fluent interface', () => {
    equal(
      createCalculator(10)
        .minus(3)
        .plus(1)
        .dividedBy(2)
        .times(3)
        .equals(),
      12
    )
  })
})