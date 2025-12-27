'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// 162. The Magic of Chaining Methods

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// want to convert to US $$. movelement values is in Euros.
const curtoUSD = 1.1;

// PIPELINE
const totalDepositsInUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    //console.log(arr); // good usecase  of using array parameter for debugging
    return mov * curtoUSD;
  })
  //  .map((mov) => mov * curtoUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsInUSD);
