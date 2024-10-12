const name= "Hemant";
const repoCount= 50;

console.log( name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //better way to write strings

const gameName = new String('Hemant') //making string ivoking objects

/* ON THE CONSOLE result of const gameName = new String('Hemant')
String {'Hemant'}
0: "H"
1: "e"
2: "m"
3: "a"
4: "n"
5: "t"
length: 6
*/
console.log(gameName[0]); // returns H
console.log(gameName.length); // returns 6
console.log(gameName.toUpperCase()) // converts the string to HEMANT
console.log(gameName); // but as string is primitive so it uses stack memory and hence the real value of gameName that is Hemant doesnt changes
console.log(gameName.charAt(2)); // returns char at index 2
console.log(gameName.indexOf('t')); // returns index of char
const newString = gameName.substring(0,4); // gets substring from 0 to 3 index
console.log(newString);

const anotherString= gameName.slice(-5,-1); // we can use negative values as well return eman
console.log(anotherString);


const newStringOne= "     hemant     ";
console.log(newStringOne.trim());  // return "hemant"

const url= "https://hemant.com/hemant%20rawat"
console.log(url.replace('%20','-'));

console.log(url.includes('hemant')); // returns true
console.log(url.includes('hello')); // returns false

const stringArray= "hemant-is-op";
const ArrayOfString = stringArray.split('-'); // split mei vo dalega jiski basics pe vo seprate hoga
console.log(ArrayOfString);

const stringArray2= "hello how are you my friend i am good how about you";
const ArrayOfString2= stringArray2.split(' '); //splits the stringArray2 on the basics of ' '
console.log(ArrayOfString2);