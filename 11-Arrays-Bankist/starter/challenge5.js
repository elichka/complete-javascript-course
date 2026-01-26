'use strict';
///////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
console.log(dogs);
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).

dogs.map(dog => (dog.recFood = dog.weight ** 0.75 * 28));

console.log('1. Dogs updated with recFood: ', dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const SarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  SarahsDog.curFood > SarahsDog.recFood
    ? "2. Sarah's dog eats too much"
    : "2. Sarah's dog eats too little"
);

// 3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).

//dogs.map(dog => (dog.tooMuch = dog.curFood > dog.recFood ? true : false));
console.log(dogs);

const myarray = dogs.reduce((accumulator, dog) => {
  if (!accumulator[0]) accumulator[0] = [];
  if (!accumulator[1]) accumulator[1] = [];
  dog.curFood > dog.recFood
    ? accumulator[0].push(...dog.owners)
    : accumulator[1].push(...dog.owners);
  return accumulator;
}, []);

console.log('3. Array of owners that eat too much: ', myarray[0]);
console.log('3. Array of owners that eat too little: ', myarray[1]);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

console.log(`4. ${myarray[0].join(' and ')}'dogs eat too much `);
console.log(`4. ${myarray[1].join(' and ')}'dogs eat too little `);

// 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)

console.log(
  '5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)',
  dogs.find(dog => dog.curFood === dog.recFood) ? true : false
);

// 6.- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).
// current > (recommended * 0.90) && current < (recommended * 1.10)
// 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)

console.log(
  '6. Are all teh dogs eating an OK amount? ',
  dogs.every(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

const okAmount = dogs.filter(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log('7. Dogs eating an OK amount:', okAmount);

// 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.

function myCallback(dog) {
  if (dog.curFood > dog.recFood) return 'too-much';
  if (dog.curFood < dog.recFood) return 'too-little';
  if (dog.curFood === dog.recFood) return 'exact';
}
const dogsGrouped = Object.groupBy(dogs, myCallback);

console.log('8.Dog grouped by amount they eat: ', dogsGrouped);

// 9. Group the dogs by the number of owners they have

const dogsGroupedbyOwners = Object.groupBy(dogs, ({ owners }) => owners.length);
console.log(
  '9. Group the dogs by the number of owners they have: ',
  dogsGroupedbyOwners
);

// 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

const dogsSortedbyRecommendedAscending = dogs.toSorted(
  (a, b) => a.recFood - b.recFood
);

console.log(
  '10. Sort the dogs array by recommended food portion in an ascending order.: ',
  dogsSortedbyRecommendedAscending
);

const dogsSortedbyRecommendedDescending = dogs.toSorted(
  (a, b) => b.recFood - a.recFood
);

console.log(
  '10. Sort the dogs array by recommended food portion in an descening order.: ',
  dogsSortedbyRecommendedDescending
);
