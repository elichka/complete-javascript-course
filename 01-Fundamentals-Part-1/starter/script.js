
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23)


let firstName = "Ellie";
console.log(firstName);

let myFirstJob = "programmer";
let myCurrentJob = "teacher";

let country = 'USA';
let continent = "North America";
let population = 340.1

console.log(country);
console.log(continent);
console.log(population);


let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof 2);
console.log(typeof 'Ellie');
console.log(typeof true);
console.log(typeof javascriptIsFun);

//dynamic typing in action

javascriptIsFun = 'YES'
console.log(typeof javascriptIsFun);

let year;
console.log(year)
console.log(typeof year)

year = 1991;
console.log(year)
console.log(typeof year)

console.log(typeof null)


let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher'

const now = 2037;
const ageEllie = now - 1967;
const ageSarah = now - 2010;
console.log(ageEllie, ageSarah);

console.log(ageEllie * 2, ageEllie / 2, 2 ** 3);
//2 ** 3 means 2 to the power of 3
const firstName = 'Ellie';
const lastName = 'Alimova';
console.log(firstName + ' ' + lastName);



// assignment operators

let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x -= 5
console.log(x);
x *= 2
console.log(x);

x++;
console.log(x);

x--;
console.log(x);


// Comparison operators
console.log(ageEllie > ageSarah);

console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// operator precedence

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
console.log(now - 1991 > now - 2018);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "i'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

//template literal example
const jonasNew = `i'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`)

// multiline string
console.log('String with \nnew line');
//example with template literal

console.log(`String with
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearsLeft} years ☹️`)
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)

//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN)

console.log(String(23), 23);

//Type coersion

console.log('I am ' + 23 + ' years old ');
console.log('23' - '10' - 3);
console.log('23' * '2', '23' / '2')



//Truthy and Faulty values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(NaN));

const money = 110;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined")
} else {
    console.log("Height is not Undefined")
}

// Equality operators
const age = '18';
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");


const favourite = Number(prompt("What is your favorite number?"));
console.log(favourite, (typeof favourite));

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
} else if (favourite === 9) {
    console.log('9 is also a cool number!');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) {
    console.log('Why not the 23?!');
}


// LOGICAL OPERATORS

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense, !hasGoodVision)



// if (shouldDrive) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive...`)
// }

const isTired = false;

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive...`)
}


// THE SWITCH STATEMENT

const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday
        console.log('Plan course structure');
        console.log('Go to coding meetup');
    //break;
    case 'tuesday':
        console.log('Prepare theory');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day')
}


// Conditional operator

const age = 18;
age >= 18 ? console.log('I like to drink wine 🍷') :
    console.log('I like to drink water 💦')


const drink = age >= 18 ? 'wine 🍷' : 'water 💦'
console.log(drink)

// Alternative in if/else statement

let drink2
if (age >= 18) {
    drink2 = 'wine 🍷'
} else {
    drink2 = 'water 💦'
}

console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`);

*/
const bill = 275;



const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

// Practice assignments 

/*
const country = 'USA';
const continent = "North America";
let population = 340100000

const isIsland = false;
let language;
language = 'English';


console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

console.log('Half of the population ' + population / 2);
console.log('Population increased by one ' + ++population)

const populationFinland = 6000000;
let isUSALargerThanFinland = population > populationFinland
console.log(country + ' has more people than Finland: ' + isUSALargerThanFinland);

const populationAverageCountry = 33000000;
let isUSALargerThanAverage = population < populationAverageCountry;
console.log(country + ' has less people than Average Country: ' + isUSALargerThanAverage);

console.log(country + ' is in ' + continent + ', and its ' + Math.floor(population / 1000000) + ' million people speak ' + language)
const description = `${country} is in ${continent}, and its ${Math.floor(population / 1000000)} million people speak ${language}`
console.log(description);

if (population > populationAverageCountry) {
    console.log(`${country} population is ${Math.floor((population - populationAverageCountry) / 1000000)} million above average`)
} else if (population < populationAverageCountry) {
    console.log(`${country} population is ${Math.floor((populationAverageCountry - population) / 1000000)} million below average`)
}


const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
*/
