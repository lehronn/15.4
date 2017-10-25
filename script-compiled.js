'use strict';

var firString = 'Hello',
    secString = 'World',
    grades = [1, 5, 5, 5, 4, 3, 3, 2, 1],
    names = [1, 4, 'Iwona', false, 'Nowak'];

var a = void 0,
    b = void 0;

//ZADANIE 1.
function sayHelloTo(firString, secString) {
  console.log(firString + ' ' + secString + '!');
};

console.log('=== zadanie 1. ze szablonami ${}:');
sayHelloTo(firString, secString);

//ZADANIE 2.
var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log('=== zadanie 2. z arrow func:');
console.log(multiply(3));
//w ciele funkcji b jest z góry zdefiniowane, jeśli przy wywołaniu je nadpiszemy to mamy funkcjonalność na której nam zależy.

//ZADANIE 3.
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var result = args.reduce(function (x, y) {
    return x + y;
  }, 0);
  return result / args.length;
};

console.log('=== zadanie 3. ze średnią:');
console.log(average(1, 2, 3));

//ZADANIE 4.
console.log('=== zadanie 4. z spreadem:');
console.log(average.apply(undefined, grades));

//ZADANIE 5.
var firstName = names[2],
    lastName = names[4];


console.log('=== zadanie 5. z destrukturyzacją:');
console.log(firstName, lastName);
