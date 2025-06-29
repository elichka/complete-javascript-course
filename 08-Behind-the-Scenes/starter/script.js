'use strict';

// function calcAge(birthyear) {
//   const age = 2025 - birthyear;

//   function printAge() {
//     let output = `${firstName}, you are ${age} born in ${birthyear}`;
//     console.log(output);

//     if (birthyear >= 1965 && birthyear <= 1980) {
//       var genX = true;
//       const firstName = 'Steven';
//       const str = `Oh, you are a GenX, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       const output = 'NEW OUTPUT';
//     }
//     //console.log(str);
//     console.log(genX);
//     //console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Ellie';
// calcAge(1967);

// Hoisting with variables
//console.log(me);
//console.log(job);
//console.log(year);

// var me = 'Ellie';
// let job = 'teacher';
// const year = '1967';

// // Hoisting with functions
// console.log(addDecl(2, 3));
// //console.log(addExpr(2, 3));
// //console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Pitfalls of hoisting
// console.log(numProducts);
// //if (!numProducts) deleteShoppingCard();

// var numProducts = 10;

// function deleteShoppingCard() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(y === window.z);

// 101. The this Keyword in Practice
// points to  window object
// console.log(this);

// //undefined in standalone function
// const calcAge = function (birthyear) {
//   console.log(2025 - birthyear);
//   console.log(this);
// };

// calcAge(1967);
// // In arrow function This keyword points to  external context -> in this case window object.  This is called lexical this keyword. Arrow functions use partent scope for this keyword
// const calcAgeArrow = birthyear => {
//   console.log(2025 - birthyear);
//   console.log(this);
// };
// calcAgeArrow(1967);

// this keyword inside object method

// const ellie = {
//   year: 1967,
//   calcAge: function () {
//     console.log(2025 - this.year);
//     console.log(this);
//   },
// };

// //ellie.calcAge();

// const matilda = {
//   year: 2017,
// };

// // method borrowing.  This keyword always points to the object calling the method.
// matilda.calcAge = ellie.calcAge;

// matilda.calcAge();

// const f = ellie.calcAge;
// // since this doesn't exist in function, this function no longer will work.
// f();

//102. Regular Functions vs. Arrow Functions
//var firstName = 'Ellie';
// const jonas = {
//   firstName: 'Jonas',
//   year: 1988,
//   calcAge: function () {
//     console.log(2025 - this.year);
//     console.log(this);
// assign value of this to self.   This is Pre ES6 solution
// Solution 1
// const self = this;
// const isMillenial = function () {
//   // console.log(this);
//   //console.log(this.year >= 1981 && this.year <= 1996);
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

// Solution 2:
// Arrow function uses this keyword of the parent scope.   In this case  parent is the object Jonas.
//     const isMillenial = () => {
//       console.log(this);
//       console.log(
//         `Are you millenial?: ${this.year >= 1981 && this.year <= 1996}`
//       );
//     };

//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(` Hey ${this.firstName}`);
//   },
// };

// jonas.calcAge();
// // arrow function in object  uses parent keyword because object literal is not a block. This behavior can be dangerous if we use var since vars are defined in global scope.

// // Best Practice: You should never use arrow function as a method for the object.
// jonas.greet();

// // this keyword with funciton inside of the method.

// function addDecl(a, b) {
//   return a + b;
// }
// // argument keyword. Only avaiallbe in regular functions
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(5, 2, 3, 5, 1200);

// // arguments keyword is undefined in arrow functions.
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(5, 2, 3, 5, 1200);

//104. Object References in Practice (Shallow vs. Deep Copies)

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalperson, newLastName) {
  originalperson.lastName = newLastName;
  return originalperson;
}
// cost marriedJessica = jessica1;
//marriedJessica.lastName = 'Davis';

const marriedJessica = marryPerson(jessica1, 'Davis');

// console.log('Before:', jessica1);
// console.log('After:', marriedJessica);

// What if actually wanted to copy object  -  brand new object in the heap that looks exactly like original object.

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// using of spread operation - places all the properies  of  origianl object into new object.
const jessicaCopy = { ...jessica };

jessicaCopy.lastName = 'Davis';
//console.log(jessica, jessicaCopy);

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
// jessicaCopy.family.push('Timothy');
// This demonstrates that  spread operator does shallow copy.  Does only first level of the object.
console.log('Before:', jessica);
console.log('After:', jessicaCopy);

// Deep copy or Deep clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');
jessicaClone.family.push('Timothy');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);
