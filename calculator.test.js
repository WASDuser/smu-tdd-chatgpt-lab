// calculator.test.js

const { add, subtract, multiply, divide } = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 3 - 1 to equal 2', () => {
  expect(subtract(3, 1)).toBe(2);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});

test('throws error when dividing by zero', () => {
    expect(() => {
        divide(6, 0);
    }).toThrow('Division by zero is not allowed');
});