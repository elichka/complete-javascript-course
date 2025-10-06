'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
// 120. 120. Looping Objects: Object Keys, Values, and Entries

// looping over keys.
const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} days: `;
//
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

// looping over the object

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
// 119. Optoinal chaining (?.)

// //console.log('restaurant.openingHours.mon: ', restaurant.openingHours.mon);
// if (restaurant.openingHours.mon)
//   console.log('restaurant.openingHours.mon: ', restaurant.openingHours.mon);
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(
//     'restaurant.openingHours.mon.open: ',
//     restaurant.openingHours.mon.open
//   );

// // With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   //console.log(day);
//   //console.log(restaurant.openingHours[day]);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(day);
//   console.log(`on ${day} restaurant opens at ${open}`);
// }

// // Methods  -  checking if method exists before calling

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exists'); // method exists and is executred
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists'); // method does not exists and will not be executed

// // Optional chaining also works on arrays.  We can check if array is empty
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// console.log(users[0]?.name ?? 'user array empty');
// console.log(users[1]?.name ?? 'user array empty');
// 118. Enhanced object litral
//ES6 intruduce 3 ways which makes it easier to write object literals.

// //console.log('Opening Hours: ', openingHours);

// // 117 Looping Arrays: the for-of loop
// console.log('----------- 117 Looping Arrays: the for-of loop -----------');
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// // how to get to the index?

// // for (const item of menu.entries()) {
// //   console.log(`${item[0] + 1}: ${item[1]}`);
// // }

// // with destructuring items array
// for (const [i, j] of menu.entries()) {
//   console.log(`${i + 1}: ${j}`);
// }
// console.log('...menu.entries(): ', ...menu.entries());
// // logical operators can use any data type, return any data type and they do short-curcuiting or short circuit evaluation

// console.log(3 || 'jonas');

// // if the first value is a truthy value it is immediately return truthy value.
// // that's what  short circuiting means

// console.log('' || 'Jonas'); // blank space is empty value
// console.log(true || 0);
// console.log(undefined || null); // undefined is a falsy value, therefore second operand would be returned even though null is also falsy value

// console.log(undefined || 0 || '' || 'Hello' || 22 || null);
// // if there is truthy value,  it will be returned.

// // //practical application example.
// // const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests);

// // // better than ternary operator or if/else statement
// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // &&  short circuitying
// console.log('---------AND---------');
// console.log(0 && 'Jonas');
// //&& returns the first faulty value without evaluating the next operand. It is opposite of || operator
// console.log(27 && 'Jonas');
// // If all operands are true, last operand is returned.
// console.log('Jonas' && 0);

// console.log(23 && null && 'Jonas');

// // practical example

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// restaurant.orderPizza1 && restaurant.orderPizza1('cat', 'dog'); // nothing will happen because this method does not exist.

// // Nullish coalescing operator ??  intoduced in ES2020

// restaurant.numGuests = 0;

// const guests = restaurant.numGuests ?? 10;
// console.log(guests);

// // Logical assignment operators introduced in ES 2021

// const restaurant1 = {
//   name: 'Capri',
//   //numGuests: 20,
//   numGuests: 0,
// };

// const restaurant2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// //set a default number of guests for all the restaurant objects that do not have this value

// // restaurant1.numGuests = restaurant1.numGuests || 10;
// // restaurant2.numGuests = restaurant2.numGuests || 10;
// console.log(restaurant1, restaurant2);

// // OR assignment operator

// // restaurant1.numGuests ||= 10;
// // restaurant2.numGuests ||= 10;

// // A logical nullish coalescing operator
// console.log('A logical nullish coalescing operator');
// restaurant1.numGuests ??= 10;
// restaurant2.numGuests ??= 10;
// console.log(restaurant1, restaurant2);

// // Logical and assignment operator.   Example: we want to anonymize name of the owner

// restaurant1.owner = restaurant1.owner && '<ANONYMOUS></ANONYMOUS>';
// restaurant2.owner = restaurant2.owner && '<ANONYMOUS></ANONYMOUS>';
// console.log(restaurant1, restaurant2);

// console.log('A logical and assignment operator');

// restaurant1.owner &&= '<ANONYMOUS></ANONYMOUS>';
// restaurant2.owner &&= '<ANONYMOUS></ANONYMOUS>';
// console.log(restaurant1, restaurant2);

// nullish value are Null and Undefined.   It does not include 0 or empty string.
// Only nullish value will short circuit the operator.

// restaurant.orderPizza('onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
// // 112: Rest pattern and prameters
// // uses same syntax to collect multiple elements and convert them into array.  Opposite of spread

// // this is spread - on the right hand side of assignment operator
// const arr = [1, 2, ...[3, 4]];

// // rest pattern example
// const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(a, b, other);

// // using ... on both sides of assignment operator

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// // note that skipped element is not in otherFoods.   therefore ... element must be the last element in restructuing
// console.log(pizza, risotto, otherFood);

// // Restructuing objects
// const { sat, ...weekdays } = { ...restaurant.openingHours };
// console.log(weekdays);

// //Functions
// // in this case, rest syntax takes multiple values and converts them into array
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// // funciton with arbitrary ammount of arguments.
// add(2, 3);
// add(5, 3, 7, 2);
// add(1, 2, 3, 4, 5, 6, 7);

// const x = [23, 5, 7];
// add(...x);

// // passing object to the function
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: '204 West 108 street, 6',
// });
// // real world example

// // const ingredients = [
// //   prompt('Lets make pasta! Ingredient 1?'),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];

// const ingredients = [];
// console.log('Ingredients: ', ingredients);
// // using spead operator to  pass variables to the array
// restaurant.orderPasta(...ingredients);

// // since ES2018 spread operator also works on objects even though objects are not iterable.

// const newRestaurant = { foundedIn: 1988, ...restaurant, founder: 'Guiseppe' };
// console.log('New Restaurant: ', newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// // Spread operator
// //expanding array without spread operator
// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// // expanding array with spread operator (ES6)
// const goodNewArray = [1, 2, ...arr];
// console.log(goodNewArray);
// console.log(...goodNewArray);
// //When we pass arguments into function

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log('New Menu: ', newMenu);

// //copy array
// const mainmenuCopy = [...restaurant.mainMenu];

// // join two arrays
// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log('Full menu: ', menu1);

// // spread operator works on all so called iterables.   All arrays, strings, maps or sets, but not objects.
// // use spead operator on the string

// const str = 'Ellie';
// const letters = [...str, ' ', 'A.'];
// console.log(letters);
// console.log(...letters);
// //110. Destructuring Objects

// const { name, categories, openingHours } = restaurant;
// //console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// //console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// //console.log(menu, starters);

// // mutating variables, default values

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// // the TRICK

// ({ a, b } = obj);

// //console.log(a, b);

// // nested objects
// const { fri } = openingHours;
// const {
//   fri: { open: o, close: c },
// } = openingHours;
//console.log(o, c);

// Array destructuring.   Breaks complex data structure into smaller data structure.

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // example of the distructuring.  This is a destructuing assignment.  Original array is not affected.
// const [x, y, z] = arr;
// console.log(x, y, z);

// // const [first, second] = restaurant.categories;
// // console.log(first, second);

// //What if you want 1 and 3?
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables Without descructuring

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // Switching variables With descructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //What happens if we have a nested array?
// // nested Destructuing
// const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Can set default  value to the variable.
// //setting default value to a variable when destructuring
// // This can be useful when we get data from the API.
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // ASSIGNMENT Starts
// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// const [, , thirdBook] = books;
// console.log(thirdBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    console.log(...players, players.length);
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers = [...players1, ...players2];
console.log('allPlayers array:', allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log('players1Final array:', players1Final);
//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = { ...game.odds };
console.log(team1, draw, team2);
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// when we use  logical and operator  both team1 < team2 and console statement will be evaluates. So, if team 1 < team2  is true then console will print out the statement.   Otherwise, nothing will happen.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/
