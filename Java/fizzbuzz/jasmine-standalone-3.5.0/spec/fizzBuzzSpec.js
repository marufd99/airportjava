'use strict';

describe('FizzBuzz', function() {
  var fizzBuzz;
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });
  describe('multiples of 3 and 5', function() {
    it('prints "FizzBuzz" for all multiples of 3 and 5', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
  });
  describe('multiples of 3', function() {
    it('prints "Fizz" for all multiples of 3', function() {
      expect(fizzBuzz.play(9)).toEqual('Fizz');
    });
  });
  describe('multiples of 5', function() {
    it('prints "Buzz" for all multiples of 5', function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });
  describe('other numbers', function() {
    it('prints the number itself if it is not a multiple of 3, 5 or 15', function() {
      expect(fizzBuzz.play(2)).toEqual(2);
    });
  });
});
