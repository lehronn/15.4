const firstWord = 'Hello',
      secondWord = 'World',
      grades = [1, 5, 5, 5, 4, 3, 3, 2, 1],
      names = [1, 4, 'Iwona', false, 'Nowak'];

let
    a,b,x,y;

//ZADANIE 1.
function sayHelloTo(firstWord, secondWord) {
  console.log(`${firstWord} ${secondWord}!`);
};

console.log ('=== zadanie 1. ze szablonami ${}:');
sayHelloTo(firstWord, secondWord);

//ZADANIE 2.
let multiply = (a, b=1) => {return a * b};

console.log ('=== zadanie 2. z arrow func:');
console.log(multiply(3));
//w ciele funkcji b jest z góry zdefiniowane, jeśli przy wywołaniu je nadpiszemy to mamy funkcjonalność na której nam zależy.

//ZADANIE 3.
// const average = (...args) => {
//   const result = args.reduce(
//     function (x, y) {
//       return x + y}, 0
//   );
// 	return result/args.length;
// };

const average = (...args) => {
  const result = args.reduce( (x, y) => {return x + y} );
  return result/args.length;
};



console.log ('=== zadanie 3. ze średnią:');
console.log (average(1,2,3));

//ZADANIE 4.
console.log('=== zadanie 4. z spreadem:');
console.log(average(...grades));

//ZADANIE 5.
const [, , firstName, ,lastName] = names;

console.log('=== zadanie 5. z destrukturyzacją:');
console.log(firstName, lastName);
