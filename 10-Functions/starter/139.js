'use strict';

// first class function and higher order functions.  Functions are treated as values.  Functions are just another type of object

// Since functions are values, we can store then as variables or object properties.  Functions can be passed as arguments to other functions. Example - addEventListener.  You can also return a function from  another function.  There are methods that you can call on functions.  Example - bind method.

// Higher order function is a function that receives function as an argument or returns a function.  addEventListener is a higher order function.  Function that is passed in is a call-back function.

// First class function is a feature of a javascript programming language.  There are no FCF in practice, it is just a concept.  But there are HOF in practice.

//////////////////////////////////////////
// 139. Functions Returning Functions
/////////////////////////////////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greet1 = greeting => name => console.log(`${greeting} ${name}`);

const greeter = greet('Hey');
greeter('Jonas');

greeter('Steven');

// THis works because of closures.  Closures one of the most misunderstood topics in javascript.

greet1('Hello')('Jonas');
greet1('Assalam Aleikum')('Ellie');

// this becomes useful when you are using functional programming paradigm.
