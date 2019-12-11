'use strict';
// src/fizzBuzz.js
function FizzBuzz()
{ }
FizzBuzz.prototype.play = function(number) {
  if (this._isDivBy(15, number)) {
    return 'FizzBuzz';
  } else if (this._isDivBy(5, number)) {
    return 'Buzz';
  } else if (this._isDivBy(3, number)) {
    return 'Fizz';
  } else {
    return number;
  }
};
FizzBuzz.prototype._isDivBy = function(divisor, number) {
  return number % divisor === 0;
};
var a = new FizzBuzz();
for (var i = 1; i <= 100; i++) {
  console.log(a.play(i));
};
