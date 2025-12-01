'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// 159. The filter Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// want to convert to US $$. movelement values is in Euros.

const deposits = movements.filter(function (mov) {
  // create array of the deposits only
  return mov > 0;
});

console.log(deposits);

// same activity with for loop example.  Much more verbose.  It is better to use more functional code.  But in practice you can chain methods together.   it would be impossible using for loop.

const depositsFor = [];

for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}

console.log(depositsFor);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});

console.log(withdrawals);

// same thing but with arrow function syntax
const withdrawalsArrowFunction = movements.filter(mov => mov < 0);
console.log(withdrawalsArrowFunction);
