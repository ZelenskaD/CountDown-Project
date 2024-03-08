// Array.map(function(x){
//     return x*2

// })

// function greet() {

// }

// const add = function(x, y){
//     return x+y;
// };
// const add = (x, y) => {
//   return x + y;
// };

// [2, 3, 6, 78, 99, 104, 23].reduce(function (max, currNum) {
//   return Math.max(max, currNum);
// });

// [2, 3, 6, 78, 99, 104, 23].reduce((max, currNum) => {
//   console.log(max, currNum);
//   return Math.max(max, currNum);
// });

//**************************
// ARROW FUNCTION "SHORTCUTS"
//**************************

// [1, 2, 3, 4, 5].forEach((n) => {
//   console.log(n * 10);
// });

// const greet = ()=>{
//     connsole.log('Hello');
// }

// [1, 2, 3, 4, 5, 6].filter(function (num) {
//   return num % 2 === 0;
// });

// [1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0);

// const double = (n) => n * 2;
// const double = (n) => {
//   return n * 2;
// };

// [1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
//   if (n % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// });
// [1, 2, 3, 4, 5, 6, 7, 8].map((n) => (n % 2 === 0 ? "even" : "odd"));

// const dailyRainTotals = [
//   [1.2, 0.35, 2.2],
//   [1.7, 0.6, 0.1],
//   [2.5, 0.9, 1.5],
// ];

// dailyRainTotals.map((hourlyRainTotals) => {
//   return hourlyRainTotals.reduce((sum, inchesOfRain) => {
//     return sum + inchesOfRain;
//   });
// });

// dailyRainTotals.map((hourlyRainTotals) =>
//   hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain)
// );

// const makeMatch = (num) => {
//   return {
//     square: num * num,
//     double: num * 2,
//   };
// };

// const makeMatch = (num) => ({
//   square: num * num,
//   double: num * 2,
// });

// const cat = {
//   name: "Bubs",
//   meow: function () {
//     return `${this.name} says MEOW!!!`;
//   },
// };

// const cat = {
//   name: "Bubs",
//   eat: function () {
//     console.log(this);
//     return `${this.name} chows down`;
//   }, //func expretion
//   meow: () => {
//     console.log(this);
//     return `${this.name} says MEOW!!!`;
//   }, //arrow func expre
// };

// function double(arr) {
//   return arr.map(function (val) {
//     return val * 2;
//   });
// }

// const double = (arr) => arr.map((val) => val * 2);

// function squareAndFindEvens(numbers) {
//   var squares = numbers.map(function (num) {
//     return num ** 2;
//   });
//   var evens = squares.filter(function (square) {
//     return square % 2 === 0;
//   });
//   return evens;
// }

// const squareAndFindEvens1 = (numbers) => ({
//   squares: numbers.map((num) => num ** 2),
//   evens: numbers.map((num) => num ** 2).filter((square) => square % 2 === 0),
// });

// const squareAndFindEvens = (numbers) =>
//   numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);

// const numbers = [1, 2, 3, 4, 5];
// const result = squareAndFindEvens(numbers);
// console.log(result);

// function min(...)
// {...}

// function max() {
//     console.log(arguments);
// }

function sum() {
  arguments;
}
