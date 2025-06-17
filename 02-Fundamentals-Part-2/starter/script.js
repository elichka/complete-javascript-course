'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive :D');

// const private = 'Audio'
*/


/*
function logger() {
    console.log('My name is Ellie');
}
// calling, running or invoking the function
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice

}

const appleJuice = fruitProcessor(5, 0);
console.log({ appleJuice });
const orangeJuice = fruitProcessor(0, 5);
console.log({ orangeJuice });
const appleOrangeJuice = fruitProcessor(2, 4);
console.log({ appleOrangeJuice });
*/

/*

function calcAge1(birthYear) {
    return 2025 - birthYear;
}

let age1 = calcAge1(1967);

// use of anonymous function - function expression
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}

let age2 = calcAge2(1967);
console.log(age1, age2)

// arrow functions ES6
// same as function expression but shorter

const calcAge3 = birthYear => 2025 - birthYear;
let age3 = calcAge3(1967)
console.log(age1, age2, age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1967, 'Ellie'))

console.clear()

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3))

console.clear()

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    //return `${firstName} retires in ${retirement}`;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement}`)
        return retirement
    } else {
        console.log(`${firstName} already retired 🎉`)
        return -1
    }
}

console.log(yearsUntilRetirement(1967, 'Ellie'));
console.log(yearsUntilRetirement(1950, 'Mike'));



// Exercise

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgDolphins < avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
checkWinner(scoreDolphins, scoreKoalas);


scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

const friends = ['Michael', 'Steven', 'Peter']; // literal syntax
console.log(friends);

//const years = new Array(1991, 1984, 2008, 2020); // array function

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length); // lenght is array object property
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; // mutate the array
console.log(friends);


const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2025 - 1991, 'teacher', friends];
console.log(jonas);


//extercise
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Array methods

// Add element
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay') // adding new member to an array at the end. this function returns  array length

console.log(friends)
console.log(newLength)

friends.unshift('John'); // adding new member to an array at the beginning. this function returns  array length
console.log(friends)
console.log(newLength)


// Remove last element of the array
friends.pop();
const popped = friends.pop(); // returns removed element
console.log(friends)
console.log(popped)

// remove first element of the array
friends.shift();
console.log(friends)

// Position of element in the array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

//ES6 methond include

console.log(friends.includes('Steven')); // includes method uses strict equality
console.log(friends.includes('Bob'));

friends.push(23); // users strict and doens't do type conversion
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friends called Steven')
}

/*
const calcTip = function (bill) {
    if (bill > 50 && bill < 300) {
        console.log('15%')
        return (bill / 100) * 15
    }
    else {
        console.log('20%')
        return (bill / 100) * 20
    }
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

console.log(calcTip(555));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])]
console.log(tips);

console.log(totals);

// object literal syntqx
const jonas = {
    firstName: 'Ellie',
    lastName: 'Alimova',
    age: 2025 - 1967,
    job: 'manager',
    friends: ['Anna', 'Elena', 'Julia']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName'])

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastNmae, age, job, friends");
console.log(interestedIn);
// console.log(jonas.interestedIn) - returns undefined
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}
else {
    console.log('Wrong request!Choose between firstName, lastNmae, age, job, friends');
}

jonas.location = 'New York';
jonas['twitter'] = '@elichka';

console.log(jonas)

// Challenge
// Jonas has 3 frends,  and his best friend is called Michael

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and her best friend is called ${jonas.friends[0]}`)


//OBJECT METHODS

const ellie = {
    firstName: 'Ellie',
    lastName: 'Alimova',
    birthYear: 1967,
    job: 'manager',
    friends: ['Anna', 'Elena', 'Julia'],
    hasDriversLicense: false,

    //calcAge: function (birthYear) {
    //    return 2025 - thisbirthYear;
    //}

    // calcAge: function () {
    //     console.log(this);
    //     return 2025 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function () {


        this.summary = `${this.firstName} is ${this.calcAge()} years old ${this.job} and she  ${this.hasDriversLicense ? "has" : "doesn't have"} a drivers license`

        return this.summary
    }

};


//console.log(ellie.calcAge(1991));
//console.log(ellie['calcAge'](1991));

console.log(ellie.calcAge());

console.log(ellie.age);
console.log(ellie.age);


console.log(ellie['age']);

console.log(ellie.getSummary())

// Challenge
// " Ellie is 58 years old manager and she has a drivers license"

// CODING CHALLENGE # 3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        //this.bmi = Math.round(bmi * 100) / 100;
        return this.bmi
    },

};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        //this.bmi = Math.round(bmi * 100) / 100;
        return this.bmi
    },

};

////console.log(john.calcBMI())
//console.log(mark.calcBMI())

if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
}

// 47.  Iteration: The for loop


// console.log('Lifting weights repetition 1 🏋️‍♀️');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);

}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2025 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const jonasArrayTypeOf = []
for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
    //Filling jonasArrayTypeOf
    //jonasArrayTypeOf[i] = typeof jonasArray[i]
    jonasArrayTypeOf.push(typeof jonasArray[i]);
}

console.log(jonasArrayTypeOf)

const types = [];

for (let value of jonasArray) {
    types.push(typeof value)
}

console.log("types array", types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let birthYear of years) {
    ages.push(2025 - birthYear);
}
console.log(ages)

// continue and break

for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i])
}

console.log('Break on the number')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] == 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i])

}

// 49. Looping Backwards and Loops in Loops


const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2025 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// start at 4 and go to 0


for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i], typeof jonasArray[i])

    if (Array.isArray(jonasArray[i])) {
        const myArray = jonasArray[i];
        console.log('----OOUTPUTTING THE ARRAY---')
        for (let value of myArray) {
            console.log('---', value)
        }
    }
}

console.log('----Exercise--')
for (let extercise = 1; extercise < 4; extercise++) {
    console.log(`--------Starting Exercise ${extercise} `)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${extercise}: Lifting weight repetition ${rep} 🏋️‍♀️`)
    }
}

// 50. The while Loop


// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight reperition ${rep} 🏋️‍♀️`);
//     rep++;
// }

// random number from 0 - 6
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6) {
        console.log('Loop is about to end')
    }
}
    */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        console.log(`current sum value: ${sum} adding ${arr[i]}`)
        sum = sum + arr[i]

    }
    console.log(sum)
    let average = sum / (arr.length)
    console.log(arr.length)
    console.log(average)
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}

console.log(tips)
console.log(totals)
calcAverage(totals)
console.log(26.4 + 339.25 + 202.4 + 528 + 44.4 + 120.75 + 12 + 1320 + 98.9 + 59.8)