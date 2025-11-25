'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// 157. The map Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// want to convert to US $$. movelement values is in Euros.

const curToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * curToUsd;
});

//using arrow function as a callback function
const movementsUSDArrow = movements.map(mov => mov * curToUsd);

console.log(movements);
console.log(movementsUSD);
console.log('movementsUSDArrow: ', movementsUSDArrow);

// same as above using  of loop
const movemensUSDFor = [];

for (const mov of movements) {
  movemensUSDFor.push(mov * curToUsd);
}

console.log(movemensUSDFor);

// map method has access to array element, index and array object itself
movements.map((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'Deposited' : 'Withdrew'}  ${Math.abs(
      mov
    )}`
  //   if (mov > 0) {
  //     return `Movement ${i + 1}: You deposited ${mov}`;
  //   } else {
  //     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  //   }
);

console.log(movementsDescription);
