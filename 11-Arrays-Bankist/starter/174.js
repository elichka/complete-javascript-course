'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// 173. Array Grouping

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'standard',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'premium',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [],
  interestRate: 0.7,
  pin: 3333,
  type: 'basic',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'premium',
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
// creates a new array with 7 empty elements.
console.log(x);
// FILL METHOD

//x.fill(1);
// fill method mutates underlying array.
console.log(x);
// You can specify value, indext and end paramether
x.fill(1, 3, 5);
console.log(x);
x.fill(1);
console.log(x);
arr.fill(23, 4, 6);

console.log(arr);

// ARRAY.from function

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// good example of specifying non needed variable with the underscore.
const z = Array.from({ length: 7 }, (_, i) => i + 1);

console.log(z);

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const hunderDiceRolls = Array.from({ length: 100 }, () =>
  getRandomIntInclusive(1, 6)
);

console.log(hunderDiceRolls);
