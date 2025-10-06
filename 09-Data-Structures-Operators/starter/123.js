'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);
// in ES6 we now can compute property names.
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 9,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // object fUnction syntax in ES 6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // IS ES6 we can compute projecty names

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  // passing the object to the function and destructuring it in the function argument
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Oerder received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delictios pasta with ${ing1}, ${ing2}, and ${ing3} `
    );
  },

  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log('Main ingridient:', mainIngridient);
    console.log('Other ingridients:', otherIngridients);
  },
  // ES6 enhanced object literals
  openingHours,
};

// is ES 2025 SET got 7 new methods making it more useful, especially if used together with array, bringing set on par with other programming languages

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// 1.intersection method - find which ingridients are present in both sets.

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection: ', commonFoods);
console.log('Intersection: ', [...commonFoods]);

// intersection method can be used to find common elements in two arrays.

// 2. union method - merges sets

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union: ', [...italianMexicanFusion]);
// another way of achieving it  - create brand new array and spead both of the arrays in there.
console.log([...new Set([...italianFoods, ...mexicanFoods])]);

//3. Difference method.  All element that are unique in the first set.
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference Italian: ', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican: ', uniqueMexicanFoods);

//4. symmetric difference - oposit of intersection method.  will give unique values from both sets.

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log('Symmetric Difference Mexican: ', uniqueItalianAndMexicanFoods);

//5. isSubsetOf,  isSupersetOf, isDisjointFrom
// Set.prototype.isSubsetOf(other):
// .
// Returns a boolean indicating whether all elements of the current set are present in the other iterable.
// Set.prototype.isSupersetOf(other):
// .
// Returns a boolean indicating whether all elements of the other iterable are present in the current set.
// Set.prototype.isDisjointFrom(other):
// .
// Returns a boolean indicating whether the current set and the other iterable have no common elements.

console.log(italianFoods.isDisjointFrom(mexicanFoods));
