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
// LECTURE 175. Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with

// reverse method is destructive, original array is mutated.  In many cases we do not want this to happen.  You can use slice method though.

console.log('movements: ', movements);
//const reversedMov = movements.reverse();
const reversedMov = movements.slice().reverse();
console.log('movements after using slice and reverse function: ', movements);
console.log('reversedMov: ', reversedMov);

// using toReverse

console.log('movements: ', movements);
//const reversedMov = movements.reverse();
const reversedMov2 = movements.toReversed();
console.log('movements after using toReversed function: ', movements);
console.log('reversedMov2: ', reversedMov2);

// toSorted(sort, toSpliced (splice))

//movements[1] = 2000;
const newMovements = movements.with(1, 2000);
console.log('newMovements: ', newMovements);
console.log('movements: ', movements);
