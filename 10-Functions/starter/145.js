'use strict';

///////////////////////////////////////
// 145. More Closure Examples

// Example 1

let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

// this proves that f function closed over any variables of the execution context in which it was defined.   it is able to access a variable even when  g function has completed its execution.  a varible is in the backpack of the f funciton.

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// Reassigning f function.
h();
f();
console.dir(f);

// Example 2 (timer)

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
//Closure has priority over the scope chain.
boardPassengers(180, 3);
