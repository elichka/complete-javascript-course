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

//   169. some and every

console.log(movements);
// includes tests for equialition
console.log(movements.includes(-130));

// what if we want to test for CONDITION instead?
// some method
// was there any positive deposits

const anyDeposit = movements.some(mov => mov > 2000);
console.log(anyDeposit);

//EVERY METHOD.
console.log(
  'Account4 movements only contain deposits:',
  account4.movements.every(mov => mov > 0)
);
console.log(
  'all movements greater than 0:',
  movements.every(mov => mov > 0)
);

// separate callbacks

const deposit = mov => mov > 0; // function expression that can be used in multiple callback functions
console.log(movements.some(deposit));
console.log(movements.every(deposit));
