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

// ES 2023 findLast, FindLastIndex

console.log(movements);

const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

// Your latest large movement was X movemenets ago.

const lastLargeMovement = movements.findLastIndex(mov => Math.abs(mov) >= 3000);
console.log(lastLargeMovement, movements[lastLargeMovement]);

console.log(
  `Your latest large movement was ${
    movements.length - lastLargeMovement
  } movements ago`
);
