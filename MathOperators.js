var x = 10 + 5;
var y = 4;
console.log(Math.random());
console.log(Math.floor(5.95));
console.log(x+y);
console.log(x*y);
console.log(x-y);
console.log(x/y);
console.log(x%y);
// calculates # of weeks in a year, rounds down to nearest integer
const weeksInYear = Math.floor(365/7);
// calcuates the number of days left over after 365 is divded by 7
const daysLeftOver = 365 % 7 ;

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

//Mathematical Assignment Operators
levelUp+=5;
powerLevel-=100;
multiplyMe*=11;
quarterMe/=4;

console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//The Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

// The value of kelvin will stay constant
const kelvin = 293;

// The value of celsius is less than value of kelvin 273 degrees
const celsius = kelvin - 273;

// Calculate the value of fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Calculate the value of Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
