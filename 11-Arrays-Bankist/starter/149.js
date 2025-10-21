'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHOD.
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(0, 3));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// use slice method to create a shallow copy of the array
console.log(arr.slice());
// or you can use spread operator
console.log([...arr]);

// SPLICE METHOD -  original orray is mutated.
//console.log(arr.splice(2)); // splice removes items from original array.
arr.splice(-1); // removes last element of array
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE - original array is mutated
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse()); // Mutates original array
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // concat using spread operators.

// JOIN

console.log(letters.join('-'));
