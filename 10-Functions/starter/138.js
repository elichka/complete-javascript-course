'use strict';

// first class function and higher order functions.  Functions are treated as values.  Functions are just another type of object

// Since functions are values, we can store then as variables or object properties.  Functions can be passed as arguments to other functions. Example - addEventListener.  You can also return a function from  another function.  There are methods that you can call on functions.  Example - bind method.

// Higher order function is a function that receives function as an argument or returns a function.  addEventListener is a higher order function.  Function that is passed in is a call-back function.

// First class function is a feature of a javascript programming language.  There are no FCF in practice, it is just a concept.  But there are HOF in practice.

//////////////////////////////////////////
//138. Functions Accepting Callback Functions
/////////////////////////////////////////

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const UpperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function - accepts function as an argument
const transformer = function (str, fn) {
  console.log(`Oringinal string: ${str}`);
  console.log(`Transformed String:  ${fn(str)}`);

  console.log(`Transformed by ${fn.name}`);
};

transformer('JavaScript is the best', UpperFirstWord);
transformer('JavaScript is the best', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);
// calling callback function on each array member.  JS uses callback all the time.
['Jonas', 'Martha', 'Adam'].forEach(high5);

//callback functions allow for the code to be reusable.  CB functions allow you to create abstractions.  Allows to hide details of the code implementation and create a new level of abstractions.
// forEach - HOF, addEventListener - HOF.
