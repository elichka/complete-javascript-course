'use strict';

///////////////////////////////////////
// 144. Closures

// this function will create a closure
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // booker is a function at this point

booker();
booker();
booker();

//Closure makes the function remember all the variables that existed at the function birthplace.
// A function has access to the variable environment (VE) or the execution context in which it was created.   Int his case,  booker function has access to variable environment of secureBooking function.

// CLOSURE:  VE attached to the function, exactly as it was at the time and place the function was created.  A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.

// Booker function closed over the parent scope.   Thanks to the closure function doesn't loose connecton to the variables that existed at the function birth place.

// Closure gives a function access to all variables of its parent function, even after that parent function has returned.  The function keeps reference to its outer scope which preserves the scope chain through time.

// A closure is like a backpack that a function carries around whenever it goes. This baqckpack has all the variables thqt were present in teh environmetn where function was created.

// We do not create closures manually. this is a Javascript feature.  that happens automatically. We can't even access closed over variables explicitly.  A closure is NOT tangible JavaScript object.

console.dir(booker);
