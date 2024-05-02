// // // Array.map(function(x){
// // //     return x*2

// // // })

// // // function greet() {

// // // }

// // // const add = function(x, y){
// // //     return x+y;
// // // };
// // // const add = (x, y) => {
// // //   return x + y;
// // // };

// // // [2, 3, 6, 78, 99, 104, 23].reduce(function (max, currNum) {
// // //   return Math.max(max, currNum);
// // // });

// // // [2, 3, 6, 78, 99, 104, 23].reduce((max, currNum) => {
// // //   console.log(max, currNum);
// // //   return Math.max(max, currNum);
// // // });

// // //**************************
// // // ARROW FUNCTION "SHORTCUTS"
// // //**************************

// // // [1, 2, 3, 4, 5].forEach((n) => {
// // //   console.log(n * 10);
// // // });

// // // const greet = ()=>{
// // //     connsole.log('Hello');
// // // }

// // // [1, 2, 3, 4, 5, 6].filter(function (num) {
// // //   return num % 2 === 0;
// // // });

// // // [1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0);

// // // const double = (n) => n * 2;
// // // const double = (n) => {
// // //   return n * 2;
// // // };

// // // [1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
// // //   if (n % 2 === 0) {
// // //     return "even";
// // //   }
// // //   return "odd";
// // // });
// // // [1, 2, 3, 4, 5, 6, 7, 8].map((n) => (n % 2 === 0 ? "even" : "odd"));

// // // const dailyRainTotals = [
// // //   [1.2, 0.35, 2.2],
// // //   [1.7, 0.6, 0.1],
// // //   [2.5, 0.9, 1.5],
// // // ];

// // // dailyRainTotals.map((hourlyRainTotals) => {
// // //   return hourlyRainTotals.reduce((sum, inchesOfRain) => {
// // //     return sum + inchesOfRain;
// // //   });
// // // });

// // // dailyRainTotals.map((hourlyRainTotals) =>
// // //   hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain)
// // // );

// // // const makeMatch = (num) => {
// // //   return {
// // //     square: num * num,
// // //     double: num * 2,
// // //   };
// // // };

// // // const makeMatch = (num) => ({
// // //   square: num * num,
// // //   double: num * 2,
// // // });

// // // const cat = {
// // //   name: "Bubs",
// // //   meow: function () {
// // //     return `${this.name} says MEOW!!!`;
// // //   },
// // // };

// // // const cat = {
// // //   name: "Bubs",
// // //   eat: function () {
// // //     console.log(this);
// // //     return `${this.name} chows down`;
// // //   }, //func expretion
// // //   meow: () => {
// // //     console.log(this);
// // //     return `${this.name} says MEOW!!!`;
// // //   }, //arrow func expre
// // // };

// // // function double(arr) {
// // //   return arr.map(function (val) {
// // //     return val * 2;
// // //   });
// // // }

// // // const double = (arr) => arr.map((val) => val * 2);

// // // function squareAndFindEvens(numbers) {
// // //   var squares = numbers.map(function (num) {
// // //     return num ** 2;
// // //   });
// // //   var evens = squares.filter(function (square) {
// // //     return square % 2 === 0;
// // //   });
// // //   return evens;
// // // }

// // // const squareAndFindEvens1 = (numbers) => ({
// // //   squares: numbers.map((num) => num ** 2),
// // //   evens: numbers.map((num) => num ** 2).filter((square) => square % 2 === 0),
// // // });

// // // const squareAndFindEvens = (numbers) =>
// // //   numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);

// // // const numbers = [1, 2, 3, 4, 5];
// // // const result = squareAndFindEvens(numbers);
// // // console.log(result);

// // // function min(...)
// // // {...}

// // // function max() {
// // //     console.log(arguments);
// // // }

// // // function sum() {
// // //   const args = Array.from(arguments);
// // //   Array.from(arguments);
// // //   return args.reduce((sum, val) => {
// // //     //loop over arguments

// // //     return sum + val;
// // //   });
// // // }

// // // const max = () => {
// // //   console.log(arguments);
// // // };

// // /*
// // ======================================== REST
// // */
// // const max = function () {
// //   const args = Array.from(arguments);
// //   return args.reduce((max, currVal) => {
// //     return currVal > max ? currVal : max;
// //   });
// // };

// // function sum(...nums) {
// //   //  console.log(nums);

// //   return nums.reduse((sum, n) => sum + n);
// // }

// // const sumAll = (...values) => {
// //   if (!values.length) return undefined;
// //   return values.reduce((sum, n) => sum + n);
// // };

// // function makeFamily(parent1, parent2, ...kids) {
// //   // console.log(parent1, parent2);
// //   // console.log(kids);

// //   return {
// //     parents: [parent1, parent2],
// //     children: kids.length ? kids : 0,
// //   };
// // }

// // const filterByType = (type, ...vals) => {
// //   return vals.filter((v) => typeof v === type);
// // };

// // //filterByType('numder', 1,2,3,)
// // // makeFamily('Cindy', 'Peter', 'Cody', 'carly')
// // // {
// // //   parent1: 'Cindy'
// // //   kids: 'Cody'
// // // }

// // function printStuff(a, ...rest) {}

// // /*
// // ===================================================== SPREAD
// // */

// // // max(...something)
// // // [...something]
// // // {...asd}

// // // const nums = [4,5,88,123,0.92, 34];
// // // Math.max(...nums)

// // // const filterByType = (type, ...vals) => {
// // //   return vals.filter((v) => typeof v === type);
// // // };

// // // const things = [23, 45, true, false, 0, "hello", "goodbye", undefined];
// // // filteredByType("number", ...things);

// // // console.log(4, 5, 6, 7, 2);

// // // console.log(...things);
// // // ==========creating copies=========

// // // const palette = ["lavender berry", "sunflower yellow", "orchid orange"];

// // // const paletteCopy = palette.slice(); //make a copy without changing in orig array
// // // ||
// // // const paletteCopy = ['sky blue', ...palette, 'grass green'];//use spread to create a copy and combine
// // // palette.concat('deep purple') //creats new array
// // // const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas];
// // // const withCaffeine = [...greenTeas, ...oolongTeas, ...coffees, "Earl Grey"];

// // // const vowels = "aeiou";
// // // const vowelArr = [...vowels, "sometimes y"]; //vowels.split('');

// // const tea = {
// //   type: "oolong",
// //   name: "winter sprout",
// //   origin: "taiwan",
// // };

// // // const tea2 = { ...tea }; //make a copy in a new array with uniq references

// // // const teaTin = { ...tea, price: 22.99 }; //copy with adding a new propetry of price

// // // const newTea = { ...tea, name: "golden frost" }; // name will be change from winter sprought ,order is matter!

// // // const teaData = {
// // //   steepTime: "30s",
// // //   brewTemp: 175,
// // //   origin: "japan",
// // // };
// // // const fullTea = { ...tea, ...teaData };

// // const shoppingCart = [
// //   {
// //     name: "honey orchid",
// //     quantity: 2,
// //     price: 13.5,
// //   },

// //   {
// //     name: "african soilstice",
// //     quantity: 4,
// //     price: 25.99,
// //   },
// // ];
// // const cartCopy = [...shoppingCart];

// // function filterOutOdds() {
// //   var nums = Array.prototype.slice.call(arguments);
// //   return nums.filter(function(num) {
// //     return num % 2 === 0
// //   });
// // }

// //  filterOutOdds (...nums){
// //   return nums.filter(num=> num%2 === o);
// //  }
// // //========or=========
// // const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

// //  const findMin = (...nums)=>
// //   Math.min (...nums)
// //   findMin(1,4,12,-3) // -3
// //   findMin(1,-1) // -1
// //   findMin(3,1) // 1

// // const mergeObjects = (objOne, objTwo) => ({...objOne, ...objTwo});

// // const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v*2)];

// // const  removeRandom = items => {
// //   let idx = math.floor(Nath.random()*items.length);
// //  return [...items.slice(0, idx), ...items.slice(idx + 1)];
// // }

// // const  extend = (array1, array2) =>{
// //   return [...array1, ...array2];
// // }

// // /** Return a new object with all the keys and values
// // from obj and a new key/value pair */

// // const addKeyVal = (obj, key, val) => {
// //   let newObj = { ...obj };
// //   newObj[key] = val;
// //   return newObj;
// // }

// // /** Return a new object with a key removed. */

// // const removeKey = (obj, key) => {
// //   let newObj = { ...obj }
// //   delete newObj[key]
// //   return newObj;

// // }

// // /** Combine two objects and return a new object. */

// // const  combine = (obj1, obj2) => {
// // return {...obj1, ...obj2};

// // }

// // /** Return a new object with a modified key and value. */

// // const update = (obj, key, val) => {
// //   let newObj = { ...obj }
// //   newObj[key] = val;
// //   return newObj;

// // }

// // function makePerson(first, last, age) {
// //   return {
// //     first,
// //     last,
// //     age,
// //     isAlive: true,
// //   };
// // }

// // const mathStuff = {
// //   x: 200,
// //   add: function (a, b) {
// //     return a + b;
// //   },
// //   square: function (a) {
// //     return a * a;
// //   },
// // // };

// // // const mathStuff = {
// // //   x: 200,
// // //   add(a, b) {
// // //     return a + b;
// // //   },
// // //   squere(a) {
// // //     return a * a;
// // //   },
// // //   multiply: (a, b) => {
// // //     return a * b;
// // //   },
// // // };

// // // function makeColor(name, hex) {
// // //   const color = {};
// // //   color[name] = hex;
// // //   color[hex] = name;
// // //   return color;
// // // }

// // // function makeColor(name, hex) {
// // //   return {
// // //     [name]: hex,
// // //     [hex]: name,
// // //   };
// // // }

// // // function createInstructor(firstName, lastName) {
// // //   return {
// // //     firstName,
// // //     lastName,
// // //   };
// // // }

// // // let favoriteNumber = 42;

// // // const instructor = {
// // //   firstName: "Colt",
// // //   [favoriteNumber]: "That is my favorite!",
// // // };

// // // let instructor = {
// // //   firstName: "Colt",
// // //   sayHi() {
// // //     return "Hi!";
// // //   },
// // //   sayBye() {
// // //     return this.firstName + " says bye!";
// // //   },
// // // };

// // // const d = createAnimal("dog", "bark", "Woooof!");
// // // // {species: "dog", bark: ƒ}
// // // d.bark(); //"Woooof!"

// // // const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// // // // {species: "sheep", bleet: ƒ}
// // // s.bleet(); //"BAAAAaaaa"

// // // function createAnimal(species, verb, noise) {
// // //   return {
// // //     species,
// // //     [verb]() {
// // //       return noise;
// // //     },
// // //   };
// // // }
// // // ==========================  DESTRUCTURING ===========================

// // // const teaOrder = {
// // //   variety: "oolong",
// // //   teaName: "winter sprout",
// // //   origin: "taiwan",
// // //   price: 12.99,
// // //   hasCaffeine: true,
// // //   quantity: 2,
// // // };

// // // const { price, quantity, teaName, ...others } = teaOrder; //rest
// // // const { country } = teaOrder;

// // // // function hi(...nums)

// // // const newTea = { ...teaOrder }; //spread
// // // // ==========================  DESTRUCTURING =========================== RENAMING

// // // const { brewTemp: temp = 175 } = teaOrder; //default value - 175, only if it's value doen't already exist (: rename)

// // // const { teaName: tea } = teaOrder; //destructure

// // // function checkout(tea) {
// // //   const { quantity = 1, price } = tea;
// // //   return quantity * price;
// // // }

// // // // checkout(teaOrder);

// // // const students = [
// // //   { name: "Bob", gpa: 4.6 },
// // //   { name: "Alice", gpa: 3.8 },
// // //   { name: "Charlie", gpa: 3.5 },
// // //   { name: "Diana", gpa: 3.9 },
// // //   { name: "Ethan", gpa: 4.0 },
// // // ];

// // // // const [topStudent, secondBest,,fourth] = students;//all about position --- ,, - skip
// // // const [first, ...losers] = students;

// // // function getTotal({ quantity: qty = 1, price }) {
// // //   return qty * price;
// // // }

// // // const longJumpResults = ["Emily", "James", "Anna"];
// // // const swimMeetResults = ["Tokio", "Seoul", "Shanhai"];

// // // function awardMedals([gold, silver, bronze]) {
// // //   return {
// // //     gold,
// // //     silver,
// // //     bronze,
// // //   };
// // // }

// // // // const { rated } = movie;
// // // // const { rating, advisory } = rated;
// // // const {
// // //   rated: { rating, advisory: note },
// // // } = movie;

// // // const {
// // //   ratings: [{ value: imdbRating }, { value: rtRating }, { value: metaRating }],
// // //   versions: [{ runtime: originalRunTime }, { runtime: directorsCutRunTime }],
// // // } = movie;

// // // // // ==========================  DESTRUCTURING =========================== SWAPPPING

// // // let delicious = "Mayonnaise";
// // // let disgusting = "Whipped Cream";

// // // // let temp = delicious;
// // // // delicious = disgusting;
// // // // disgusting = temp;

// // // const both = [delicious, disgusting];
// // // [delicious, disgusting] = both;

// // // [disgusting, delicious] = [delicious, disgusting]; //swap shortcup

// // let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// // let { numPlanets, yearNeptuneDiscovered } = facts;

// // console.log(numPlanets); // 8
// // console.log(yearNeptuneDiscovered); //1846
// // //============================================

// // let planetFacts = {
// //   numPlanets: 8,
// //   yearNeptuneDiscovered: 1846,
// //   yearMarsDiscovered: 1659,
// // };

// // let { numPlanets, ...discoveryYears } = planetFacts;

// // console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// // //============================================

// // function getUserData({ firstName, favoriteColor = "green" }) {
// //   return `Your name is ${firstName} and you like ${favoriteColor}`;
// // }

// // getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // "Your name is Alejandro and you like purple"

// // getUserData({ firstName: "Melissa" }); // "Your name is Melissa and you like green" //default value

// // getUserData({}); // "Your name is undefined and you like green"

// // //============================================

// // let [first, second, third] = ["Maya", "Marisa", "Chi"];

// // console.log(first); // "Maya"
// // console.log(second); // "Marisa"
// // console.log(third); // "Chi"

// // //============================================

// // let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
// //   "Raindrops on roses",
// //   "whiskers on kittens",
// //   "Bright copper kettles",
// //   "warm woolen mittens",
// //   "Brown paper packages tied up with strings",
// // ];

// // console.log(raindrops); // "Raindrops on roses"
// // console.log(whiskers); //  "whiskers on kittens",
// // console.log(aFewOfMyFavoriteThings); // "Bright copper kettles","warm woolen mittens", "Brown paper packages tied up with strings"

// // //============================================

// // let numbers = [10, 20, 30];
// // [numbers[1], numbers[2]] = [numbers[2], numbers[1]];

// // console.log(numbers); // 10, 30, 20

// // //============================================

// // var obj = {
// //   numbers: {
// //     a: 1,
// //     b: 2,
// //   },
// // };

// // var a = obj.numbers.a;
// // var b = obj.numbers.b;

// // const obj = {
// //   numbers: {
// //     a: 1,
// //     b: 2,
// //   },
// // };
// // const { a, b } = obj.numbers;
// // //============================================

// // var arr = [1, 2];
// // var temp = arr[0];
// // arr[0] = arr[1];
// // arr[1] = temp;

// // const arr = [1, 2];
// // [arr[0], arr[1]] = [arr[1], arr[0]];

// // //============================================

// // raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]);

// // /*
// //   {
// //     first: "Tom",
// //     second: "Margaret",
// //     third: "Allison",
// //     rest: ["David", "Pierre"]
// //   }
// // */

// // const raceResults = ([first, second, third, ...rest]) => ({
// //   first,
// //   second,
// //   third,
// //   ...rest,
// // });

// //============================================ MAPS

// // const myMap = new Map();
// // myMap.set(7, "seven");
// // myMap.set("7", "seven string");

// // //store a reference too
// // const empty = [];
// // myMap.set([], "empty array!");

// // myMap.set(true, "TRUE!");

// // myMap.get(7);

// // const add = (x, y) => x + y;
// // const mult = (x, y) => x * y;

// // const funcCalls = new Map();
// // funcCalls.set(add, 1);
// // funcCalls.set(mult, 9);

// // const bandData = [[3, "3 Doors Down"];
// // ["three", "Three Dog Night"];
// // ["nine", "Nine Inch Nails"];
// // ["four", "The Four Seasons"];
// // [41, "Sum 41"]];

// // const bandMap = new Map(bandData);
// // [...bandMap] //spread, array of pairs

// // bandMap.set (182, 'Blink-182').set('twenty', 'Matchbox Twenty');//plus 2 elements to the array
// // bandMap.has(3)//check if array contains something
// // bandMap.has('
// // twenty')

// // bandMap.forEach((val, key) => {
// //   console.log(key + "=>" + val); // iterating over a map
// // });

// // for (let [key, value] of bandMap) {
// //   //iterate over map
// //   console.log(key, "=", value);
// // }

// //============================================ SETS

// const bannedHashTags = new Set(["nofilter", "justsaying", "winning", "yolo"]); //empty set is created //second onr - ignore
// bannedHashTags.add("bestlife").add("selfie"); //add to new set

// bannedHashTags.has("yolo"); //cheaking if in the set //yes

// bannedHashTags.delete("winning"); //delete

// bannedHashTags.clear(); //clear entire set

// function filterHashTags(tags) {
//   const bannedHashTags = new Set(["nofilter", "justsaying", "winning", "yolo"]);
//   return tags.filter((tag) => !bannedHashTags.has(tag)); //if value exists in the collection of the values
// }

// const susansTags = ["happymonday", "yolo", "winning", "sunset"];

// const ages = [45, 42, 23, 23, 4, 43, 60, 22, 2, 14, 45, 4]; //remove duplicates from the  array

// [...new set(ages)];

// bannedHashTags.forEach((tag) => console.log("STOP USING:", tag));
// //===========================================================

// new Set([1, 1, 2, 2, 3, 4]); // new Ser [1,2,3,4]
// //===========================================================

// [...new Set("referee")].join(""); // ref
// //===========================================================

// let m = new Map();
// m.set([1, 2, 3], true); // 0: {Array(3) => true}
// m.set([1, 2, 3], false); // 1: {Array(3) => false}
// //===========================================================

// hasDuplicate([1, 3, 2, 1]); // true
// hasDuplicate([1, 5, -1, 4]); // false

// const hasDuplicate = (arr) => new Set(arr).size !== arr.length; //cheaking if has duplicates
// //===========================================================
// vowelCount("awesome"); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount("Colt"); // Map { 'o' => 1 }

// function isVowel(char){
//   return "aeiou".includes(char);
// }

// function vowelCount(str){
//   const vowelMap = new Map();
//   for(let char of str){
//     let lowerCaseChar = char.toLowerCase()
//     if(isVowel(lowerCaseChar)){
//       if(vowelMap.has(lowerCaseChar)){
//         vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
//       } else {
//         vowelMap.set(lowerCaseChar, 1);
//       }
//     }
//   }
//   return vowelMap;
// }

//=========================================================== OOP

// const color = "teal";
// const obj = {};
// obj.color = "#3723FF";
// obj[color] = "#3723FF";
// obj[1 + 4 - 2 * 8] = "#3723FF";

// object.keys(obj);
// object.entries; //array in which element is a pair

// for (let [k, v] of Object.entries(obj)) {
//   //iterate
//   console.log(k, v);
// }

// [obj - 11]; //"#3723FF";

// const add = (x, y) => x + y;
// const mult = (x, y) => x * y;
// const square = (x) => x * x;
// const power = (x, y) => x ** y;

// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;

//shortcut

// const myMath = {add, mult,square,power};

//inline

// const myMath = {
//   add: function (x, y) {
//     return x + y;
//   },
//   mult: (x, y) => {
//     return x * y;
//   },
// };

// const myMath = {
//   add(x, y) {
//     return x + y;
//   },
//   square(x) {
//     return x * x;
//   },
// };

// function getHypotenuse(a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// }
// function getArea(a, b) {
//   return (a * b) / 2;
// }

// const side1 = 4;
// const side2 = 3;
// const side3 = getHypotenuse(side1, side2);
// const area = getArea(side1, side2);

// const rightTriangle = {
//   a: 9,
//   b: 12,
//   printThis: function () {
//     console.log(this);
//   },
//   getArea: function () {
//     return (this.a * this.b) / 2;
//   },
//   getHypotenuse: function () {
//     this.printThis();
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   },
// };

// function Triangle(a, b) {
//   this.a = a;
//   this.b = b;
//   this.getArea = function () {
//     return (this.a * this.b) / 2;

//   };
//   this.getHypotenuse = function () {

//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   },
// }
// }
// (Triangle.prototype.getArea = function () {
//   return (this.a * this.b) / 2;
// }),
//   (Triangle.prototype.getHypotenuse = function () {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   });

// Triangle(5, 7); //using the new operator
// const tri1 = new Triangle(3, 4);
// tri1.getHypotenuse(); //5
// const tri2 = new Triangle(9, 12);
// tri2.getHypotenuse(); //15

// Array.prototype.push = function(val){
//   console.log(`SO YOU WANT TO ADD ${val}??`);
//   console.log(`SORRY DON'T FEEL LIKE IT!`);
// }

// class Triangle {
//   constructor(a, b, c) {
//     console.log("INSIDE TRIANGLE CONSTRUCTOR!");
//     // Check if sides are positive numbers
//     if (![a, b, c].every((side) => Number.isFinite(side) && side > 0)) {
//       throw new Error("Sides must be positive numbers!");
//     }

//     this.a = a;
//     this.b = b; // pattern
//     this.c = c;
//   }

//   greet() {
//     console.log("HELLO FROM TRIANGLE!");
//   }

//   display() {
//     return `Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`;
//   }

//   getArea() {
//     const { a, b, c } = this;
//     const s = (a + b + c) / 2;
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   }

//   isBig() {
//     return this.getArea() > 50;
//   }
// }

// class RightTriangle extends Triangle {
//   constructor(a, b, c) {
//     // Check if the triangle satisfies the Pythagorean theorem
//     if (a * a + b * b !== c * c) {
//       throw new Error("Invalid C side for right triangle!");
//     }

//     // Log a message indicating that the constructor is called
//     console.log("INSIDE RIGHT TRIANGLE CONSTRUCTOR!");

//     // Call the constructor of the parent class (Triangle)
//     super(a, b, c);
//     this.hypot = c;
//   }

//   // Method to check if the triangle is a right triangle
//   isRightTriangle() {
//     return true;
//   }

//   // Override the display method to provide specific information for right triangles
//   display() {
//     return "Right " + super.display();
//   }
// }

// const myRightTriangle = new RightTriangle(3,4,5)

//myRightTriangle.display()

// const t1 = new Triangle(3, 4, 5);
// const t2 = new Triangle(5, 9, 10);
// const t3 = new Triangle(30, 40, 50); //t3.isBig()//true
// t1.display();

// myTri.display(); //refer to MyTri

// const firstTri = new Triangle(); //firstTri.greet();
// firstTri.a = 3; //firstTri.display();
// firstTri.b = 4;
// const secondTri = new Triangle();
// secondTri.a = 9; new
// secondTri.b = 12;

//=========================Car OO Challenge /Part One

// class Vehicle{
//   constructor(make, model, year){

//   }
// }

// const cat = {
//   name: "Blue", //window.name has own name default
//   breed: "Scottish Fold",
// //   dance: function (dance) {
// //     console.log("THIS IS:", this);
// //     console.log(`Meow, I am ${this.breed} and I like to ${dance}`);
// //   },
// // };
// // cat.dance("salsa");

// // // const bluesDance = cat.dance;  window obj
// // // (window.)bluesDance("salsa");//change to var if you wanna execute window

// // function whatIsThis() {
// //   console.log("this =", this);
// // }

// // const myObj = {
// //   func: whatIsThis,
// //   color: "purple",
// // };

// // myObj.func(); // left - value of this
// // window.whatIsThis();
// // //value of this set to the window

// // class Car {
// //   constructor(name, breed) {
// //     this.name = name;
// //     this.breed = breed;
// //   }
// //   dance(danceType) {
// //     console.log("THIS IS:", this);
// //     console.log(`Meow, I am ${this.breed} and I like to ${dance}`);
// //   }
// // },

// // const rocket = new Cat("rocket", "tobby");
// // rocket.dance("tango");
// // const rocketDance = rocket.dance;
// // rocketDance("tango");

// //==============================call()

// // cat.dance.call(window, "salsa");
// // cat.dance("salsa");

// // const blueDance = cat.dance;
// // blueDance.call(cat, "jitterbug");

// // const dog = {
// //   breed: "Black Lab",
// //   name: "Elton",
// // };
// // blueDance.call(dog, "hip hop dance");

// // function printThis() {
// //   console.log("THIS =====>>>", this);
// // }

// // printThis.call(cat);

// // const cat = {
// //   name: "Blue", //window.name has own name default
// //   breed: "Scottish Fold",
// //   dance: function (dance) {
// //     console.log("THIS IS:", this);
// //     console.log(`Meow, I am ${this.breed} and I like to ${dance}`);
// //   },
// //   play: function (...toys) {
// //     for (let toy of toys) {
// //       console.log(`${this.name} plays with ${toy}`); //cat.play('string', 'my pantleg')
// //     }
// //   },
// // };
// // // const dog = {
// // //   breed: "Black Lab",
// // //   name: "Elton",
// // // };
// // // cat.play.call(dog, "bone", "my cat"); //console.dir (cat.play)

// // const rocket = {
// //   name: "Rocket",
// //   breed: " Himalayan",
// // };

// // // blue.dance();
// // const bDance = blue.dance; //unchanged
// // // bDance.call(blue, "waltz");
// // const boundDance = bDance.bind(blue); //blue - as a value of this//copy
// // //boundDance('waltz')
// // const rocketDance = blue.dance.bind(rocket);
// // // rocketDance("tango");
// // const dog = {
// //   name: "Tyson",
// //   breed: "Mini Aussie",
// //   dance: rocketDance,
// // };
// // // dog.dance("waltz");

// // const blueDisco = blue.dance.bind(blue, "disco");
// // //exdecute blueDisco()
// // const playsWithSocks = blue.play.bind(blue, "left sock", "right sock");
// // //playsWithSocks('dirty sock')

// // function applySalesTax(taxRate, price) {
// //   return price + price * taxRate;
// // }

// // const applyCATax = applySalesTax.bind(null, 0.0725);
// // const applyTXTax = applySalesTax.bind(null, 0.0625);

// // const bobsMembership = {
// //   name: "Bob",
// //   total: 250,
// // };

// // const jillsMembreship = {
// //   name: "Jill",
// //   total: 899,
// // };

// // function collectNonthlyFee(fee) {
// //   //method that passing func
// //   const remaining = this.total - fee;
// //   this.total = remaining;
// //   return this.name + "remaining balance:" + remaining;
// // }

// // const collectBobsFee = collectNonthlyFee.bind(bobsMembership, 5);
// // // bobsMembership.collectNonthlyFee(50);
// // const collectJillsFee = collectNonthlyFee.bind(jillsMembership, 5);
// // // jillsMembership.collectNonthlyFee(50);

// const blue = {
//   name: "Blue", //window.name has own name default
//   breed: "Scottish Fold",
//   dance: function (dance) {
//     console.log("THIS IS:", this);
//     console.log(`Meow, I am ${this.breed} and I like to ${dance}`);
//   },
//   play: function (...toys) {
//     for (let toy of toys) {
//       console.log(`${this.name} plays with ${toy}`); //cat.play('string', 'my pantleg')
//     }
//   },
//   greet() {
//     alert(`${this.name} SAYS MEOW!`);
//   },
// };
// const btnA = document.querySelector("#a");
// const btnB = document.querySelector("#b");
// const btnC = document.querySelector("#c");

// function popUp(msg) {
//   alert("Secret message is " + msg);
// }

// // btnA.addEventListener("click", function () {
// //   popUp("BUTTON A SAYS HI!");
// // });
// // btnB.addEventListener("click", function () {
// //   popUp("BUTTON B SAYS HI!");
// // });
// // btnC.addEventListener("click", function () {
// //   popUp("BUTTON C SAYS HI!");
// // });

// btnA.addEventListener("click", popUp.bind(null, "Button A Says Hi"));
// btnB.addEventListener("click", popUp.bind(null, "Button B Says Hi"));
// btnC.addEventListener("click", popUp.bind(null, "Button C Says Hi"));

// const greeter = {
//   msg: "I like chickenz ",
//   sayHi: function () {
//     alert(this.msg);
//   },

//   waitAndGreet: function (delay) {
//     console.log(this); // Log the value of `this` (optional)

//     // Define the callback function correctly
//     let callback = function () {
//       console.log(this); // `this` will be undefined inside the callback without binding
//       alert(this.msg); // This will throw an error because `this` is not bound
//     };

//     // Use bind to bind the `this` context of the outer function to the callback function
//     setTimeout(callback.bind(this), delay);
//   },
// };

// // Usage:
// greeter.waitAndGreet(1000); // Wait for 1000 milliseconds (1 second) before greeting

const greeter = {
  msg: "I like chickenz ",
  sayHi: () => {
    alert(this.msg);
  },
  waitAndGreet: function (delay) {
    satTimeout(
      function () {
        alert(this.msg);
      }.bind(this),
      delay
    );
  },
};
