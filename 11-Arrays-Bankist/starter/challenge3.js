'use strict';
///////////////////////////////////////
///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

console.log('########## calcAverageHumanAge1 ###########');

const calcAverageHumanAge1 = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((agg, age, i, arr) => agg + age / arr.length, 0);
//console.log(`Average dog age in human ages is: ${averageAge}`);

const avg3 = calcAverageHumanAge1(dogAges1);
const avg4 = calcAverageHumanAge1(dogAges2);

console.log(avg3, avg4);
