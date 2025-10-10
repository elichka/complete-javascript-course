'use strict';

///////////////////////////////////////
// 143. Immediately Invoked Function Expressions (IIFE)

// need a function only executed once and never again.  How can we do it?   YOu can create a function and execute it once.   However, nothing prevents us from running this function again.    We do not want to save the function

(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// wrapping into parentesis - transform statement into the expression.  no more errors generated. and you call it by adding () at the end.

(() => console.log('This will ALSO never run again'))();

//Why was this pattern invented?  Global scope has no access to the inner scopes. All data inside functino scope is private and incapsulated.  Variables declared with let or const create their own scope within the blog, but not var.

{
  const isPrivate = 23;
  var notPrivate = 46;
}

//console.log(isPrivate); - generates error
console.log(notPrivate);
