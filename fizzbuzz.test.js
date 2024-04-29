// fizzbuzz.test.js

const fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {

    // fizzbuzz.test.js

  test('should throw an error for invalid input parameter', () => {
    expect(() => fizzBuzz('invalid')).toThrow('Invalid input: parameter must be a number');
    expect(() => fizzBuzz(null)).toThrow('Invalid input: parameter must be a number');
    expect(() => fizzBuzz(undefined)).toThrow('Invalid input: parameter must be a number');
    // Add more test cases for invalid input if needed
  });

  test('should return Fizz if the number is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
    // Add more test cases here if needed
  });

  test('should return Buzz if the number is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
    // Add more test cases here if needed
  });

  test('should return FizzBuzz if the number is divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(45)).toBe("FizzBuzz");
    // Add more test cases here if needed
  });

  test('should return the number itself if not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(4)).toBe(4);
    // Add more test cases here if needed
  });
});
