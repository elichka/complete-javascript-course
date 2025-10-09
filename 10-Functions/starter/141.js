'use strict';

//////////////////////////////////////////
// 140. The call and apply Methods
/////////////////////////////////////////

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} book the seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//book(23, 'Sarah Williams'); DOESN"T WORK
// CALL METHOD
book.call(eurowings, 23, 'Sarah Williams'); // setting  this keyword to a specific object.
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// APPLY METHOD - take array of arguments. is not that frequently used in modern java script.  However, you can just use  call with spread operator on array.

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// BIND METHOD - next lecture.
//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); // providing arguments.  This is a pattern called "partial application". Part of the argument of original function is already applied.

bookEW23('Elmira Alimova');
bookEW23('Martha Cooper');

// WITH Event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// this keyword here always points to the element to which it is attached.
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// using bind method to  explicitly set  this object.

// Partial application

//General funciton for adding tax
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // we do not care about This - so we just specify null.

console.log(addVAT(100));
console.log(addVAT(23));

// This creates more specific function based on the general function.   Using bind actually creates a new function.

// Rewrite this using example of one function returning another function.

console.log(
  'Rewrite this using example of one function returning another function.'
);

const AddTax1 = function (rate) {
  console.log(rate);
  return function (value) {
    return value + value * rate;
  };
};

const addVAT1 = AddTax1(0.23);

console.log(addVAT1(100));
console.log(addVAT1(23));
