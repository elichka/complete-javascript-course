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
const arr = [23, 11, 64];
console.log(arr[0]);

// AT METHOD

console.log(arr.at(0));

console.log(arr[arr.length - 1]); // last element of the array.
console.log(arr.slice(-1)[0]); // using slice method

console.log(arr.at(-1)); // using negative index with the at method.
console.log(arr.at(-2));

// AT method useful  when you need to get to the last element of the array. Also useful in method chaining.
// AT method also works on strings

console.log('jonas'.at(0));
console.log('jonas'.at(-1));
