'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// 164. The find Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// want to convert to US $$. movelement values is in Euros.
const curtoUSD = 1.1;

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//170. flat and flatMap

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// flat and flatmap was intoduced in ES 2019
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// flat method only goes one level deep by default. You can provide level  argument to flat function
console.log(arrDeep.flat(2));

// Problem: bank wants to calculate overall balance of all  the movements of all the accounts

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((accumulator, mov) => accumulator + mov, 0);

console.log(overallBalance);

// flatMap combines flat method and map method which is better for performance.
// flatMap only goes one level deep.

const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((accumulator, mov) => accumulator + mov, 0);

console.log(overallBalance2);
