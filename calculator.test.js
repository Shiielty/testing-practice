import { calculator } from './calculator'

const sum = calculator.sum
const subtract = calculator.subtract
const divide = calculator.divide
const multiply = calculator.multiply

test('Sum test: add numbers', () => {
  expect(sum(1, 1)).toBeCloseTo(2)
  expect(sum(2, 2)).toBeCloseTo(4)
  expect(sum(100, 50)).toBeCloseTo(150)
  expect(sum(-99, 100)).toBeCloseTo(1)
  expect(sum(-5.55, 3.25)).toBeCloseTo(-2.3)
})

test('Sum test: add string of number', () => {
  expect(sum('1', '1')).toBeCloseTo(2)
  expect(sum('2', '2')).toBeCloseTo(4)
  expect(sum('100', '50')).toBeCloseTo(150)
  expect(sum('-99', '100')).toBeCloseTo(1)
  expect(sum('-5.55', '3.25')).toBeCloseTo(-2.3)
})

test('Sum test: return null if parameter is empty or not a number', () => {
  expect(sum()).toBeNull()
  expect(sum(1, 'b')).toBeNull()
  expect(sum('a', 'b')).toBeNull()
})

test('Subtract test: subtract numbers', () => {
  expect(subtract(1, 1)).toBeCloseTo(0)
  expect(subtract(2, 2)).toBeCloseTo(0)
  expect(subtract(100, 50)).toBeCloseTo(50)
  expect(subtract(-99, 100)).toBeCloseTo(-199)
  expect(subtract(-5.55, 3.25)).toBeCloseTo(-8.8)
})

test('Subtract test: subtract string of number', () => {
  expect(subtract('1', '1')).toBeCloseTo(0)
  expect(subtract('2', '2')).toBeCloseTo(0)
  expect(subtract('100', '50')).toBeCloseTo(50)
  expect(subtract('-99', '100')).toBeCloseTo(-199)
  expect(subtract('-5.55', '3.25')).toBeCloseTo(-8.8)
})

test('Subtract test: return null if parameter is empty or not a number', () => {
  expect(subtract()).toBeNull()
  expect(subtract(1, 'b')).toBeNull()
  expect(subtract('a', 'b')).toBeNull()
})

test('Divide test: divide numbers', () => {
  expect(divide(1, 1)).toBe(1)
  expect(divide(0, 1000)).toBe(0)
  expect(divide(2, 1)).toBe(2)
  expect(divide(5, 2)).toBeCloseTo(2.5)
  expect(divide(1000, 5)).toBe(200)
})

test('Divide test: divide string of number', () => {
  expect(divide('1', '1')).toBe(1)
  expect(divide('2', '1')).toBe(2)
  expect(divide('5', '2')).toBeCloseTo(2.5)
  expect(divide('1000', '5')).toBe(200)
})

test('Divide test: n/0 is Infinity, 0/0 is NaN', () => {
  expect(divide(50, 0)).toBe(Infinity)
  expect(divide(0, 0)).toBe(NaN)
})

test('Divide test: return null if parameter is empty or not a number', () => {
  expect(divide()).toBeNull()
  expect(divide(1, 'b')).toBeNull()
  expect(divide('a', 'b')).toBeNull()
})

test('Multiply test: multiply number and string of number', () => {
  expect(multiply(1, 1)).toBe(1)
  expect(multiply('5', 2)).toBe(10)
  expect(multiply(0, 50)).toBe(0)
})

test('Multiply test: return null if parameter is empty or not a number', () => {
  expect(multiply()).toBeNull()
  expect(multiply(1, 'b')).toBeNull()
  expect(multiply('a', 'b')).toBeNull()
})
