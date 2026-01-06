'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// 172. Sorting Arrays

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// want to convert to US $$. movelement values is in Euros.
const curtoUSD = 1.1;

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// sort method mutates orginal array
console.log(owners);

// Numbers // compare function to sort numerical
// return  < 0, a, b KEEP ORDER
// return > 0, B, A SWITCH ORDER

// movements,
//   sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
//   });

// compare function to sort numerical
console.log(movements);
// ASCENDING
console.log(
  movements.sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
  })
);
// MUCH Simpler syntax
console.log(movements.sort((a, b) => a - b));
// DESCENDING
console.log(
  movements.sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
  })
);

// MUCH Simpler syntax
console.log(movements.sort((a, b) => b - a));
