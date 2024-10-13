const score= 400;
console.log(400);  // output=> 400

const balance= new Number(100);
console.log(balance);  //output=> [Number: 100] and now this number has some properties as well 

//some properties/methods for Numbers
console.log(balance.toFixed(2)); // output => 100.00

const otherNumber= 123.8764;
console.log(otherNumber.toPrecision(3));  // output => 124
console.log(otherNumber.toPrecision(4));  // output => 123.9
console.log(otherNumber.toPrecision(5));  // output => 123.88

const str= balance.toString(); // converts Number 100 into string. Once we convert a number into a string then we can use string properties as well
console.log(str);
console.log(typeof (str)); // output => string

console.log(str.length); // output => 3
console.log(str.substring(0,2)); // output =>10
console.log(str.slice(-2,2)); //output => 0

const hundreds= 10000000;
console.log(hundreds.toLocaleString('en-IN')); // will give commas according to indian standards



//*************************MATHS*********************************

console.log(Math);
console.log(Math.abs(-4)); // output => 4
console.log(Math.round(4.2)); //output=> 4
console.log(Math.round(4.6)); //output=> 5
console.log(Math.ceil(4.2));  //output=> 5
console.log(Math.floor(4.6)); //output=> 4

console.log(Math.random()); //give us a number between 0 and 1
console.log(Math.random()*10);  // give us a number between 0 and 10
console.log(Math.floor((Math.random()*10)+1)); //surety that the random number will never be 0

const min= 10;
const max= 20;
// we need random to generate numbers only between 10 and 20
console.log(Math.floor((Math.random()* (max-min+1)))+min);  //results in random numbers between 10 and 20