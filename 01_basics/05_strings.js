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
