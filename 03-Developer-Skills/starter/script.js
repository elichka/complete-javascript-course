// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';

const calcAge = birthYear => 2025 - birthYear;

if (x === 23) console.log(23);

console.log(calcAge(1976));



// 63. Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    // Fix
    //value: Number(prompt('Degree Celcius:')),
    value: 10,
  };
  //console.log(measurement);
  // find the bug
  console.table(measurement);
  console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

//
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    //debugger;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

// CODING CHALLENGE #1

const printForecast = function (arr) {
  let forecast = '... ';
  for (let i = 0; i < arr.length; i++) {
    forecast = forecast + `${arr[i]}℃ in ${i + 1} days ... `;
  }
  console.log(forecast);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

*/

//66. Solving CHALLENGE #2 With AI
/* 
Let's say you're building a time tracking application for freelancers .At some point in building this app, you need a function that receives daily work ours for a certain week and returns:

1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether or the week was full-time (worked 35 hours or more

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

/*
const weeklyWork = function (hoursArray) {
  const week = {
    total: 0,
    average: 0,
    dayMostHours: '',
    daysWorked: 0,
    fullTime: true,
  };
  const daysArray = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  week.total = hoursArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  week.average = week.total / hoursArray.length;
  week.dayMostHours = daysArray[hoursArray.indexOf(Math.max(...hoursArray))];
  console.log(Math.max(...hoursArray));
  week.fullTime = week.total >= 35;
  week.daysWorked = hoursArray.filter(item => item !== 0).length;
  console.log(hoursArray.filter(item => item !== 0));
  return week;
};

let testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];
let week = weeklyWork(testData);
console.table(week);
*/

function analyzeWorkWeek(dailyHours) {
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error(
      'Input must be an array with exactly 7 elements (one for each day of the week).'
    );
  }

  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageDailyHours = +(totalHours / 7).toFixed(1);
  const maxHours = Math.max(...dailyHours);
  const mostWorkedDayIndex = dailyHours.indexOf(maxHours);
  const daysWorked = dailyHours.filter(hours => hours > 0).length;
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageDailyHours,
    mostWorkedDay: getDayName(mostWorkedDayIndex),
    daysWorked,
    isFullTime,
  };
}

function getDayName(index) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  return days[index];
}

const weekData = [7.5, 8, 6.5, 0, 8.5, 5, 0];
const result = analyzeWorkWeek(weekData);
console.log(result);

const weekData2 = [7.5, 8, 6.5, 0, 8.5];
const result2 = analyzeWorkWeek(weekData2);
console.log(result2);
