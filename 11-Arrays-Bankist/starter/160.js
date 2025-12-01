'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// 160. The reduce Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// want to convert to US $$. movelement values is in Euros.
// reduce method is used to boil down all elements of array into single value

const balance = movements.reduce(function (
  accumulator,
  currentvalue,
  currentIndex,
  array
) {
  console.log(`iteration ${currentIndex}: ${accumulator}`);
  return accumulator + currentvalue;
},
0); // in this case 0 is intial accumulator value

console.log(movements);
console.log(balance);

// same thing but with the for loop

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//same thing using reduce method and arrow function

const balance3 = movements.reduce((acc, mov) => acc + mov);
console.log(balance3);

// get the max value of the movements array
const greatest = movements.reduce((acc, mov) => (acc >= mov ? acc : mov));
console.log(`largest deposit: ${greatest}`);
