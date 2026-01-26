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
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
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
// LECTURE 177. Array Methods Practice

// Exercise $1: Create a sum of all Deposits accross  all accounts.
const bankDepositsSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, curvalue) => acc + curvalue, 0);

console.log(bankDepositsSum);

// Exercise $2: Number of deposits at the bank with at least $1000

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposits1000);

// doing the same as above with reduce method.

const numDeposits1000b = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, mov) => (mov >= 1000 ? count + 1 : count), 0);

console.log(numDeposits1000b);

// Plus Plus Operator.  Increments the value, but returns the previous value!!!
console.log(
  '// Plus Plus Operator.  Increments the value, but returns the previous value!!!'
);
let a = 10;
console.log(a++);
console.log(a);
// You can use prefix ++ operator

console.log(' You can use prefix ++ operator:');
let b = 10;
console.log(++b);
console.log(b);

// Exercise #3.  create an object that contains arrays  of the deposits and of the withdrawals.
//const allMovements = accounts.flatMap(acc => acc.movements);
const sortedMovements = Map.groupBy(
  accounts.flatMap(acc => acc.movements),
  (num, index, array) => (num > 0 ? 'deposit' : 'withdrawal')
);

console.log(sortedMovements);
let testarray = [[], []];
testarray[0].push(10);
console.log(testarray);

// Exercise #3.  create an object that contains sum of the deposits and of the withdrawals using reduce method

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      //   cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// Exercise #4. Create a simple function to convert string into title case

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');

  return capitalize(titleCase);
};

console.log(
  convertTitleCase('Create a simple function to convert string into title case')
);

console.log(convertTitleCase('This is a LONG title but not too long'));
console.log(convertTitleCase('and Another title with an EXAMPLE'));
