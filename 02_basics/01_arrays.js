// Javascript arrays are resizable
const myArr = [0,1,2,3,4,5];
// console.log(myArr);
const Arr = [0,1,2,true,"Hemant"]; //this is also right
// console.log(Arr);
// console.log(Arr[4]);
const myHeroes= ["Shaktiman", "Naagraj"];
const myArr2= new Array(1,2,3,4);

// Array Methods

myArr.push(6);  // push elements into array
myArr.push(7);  // push elements into array
myArr.pop(); //pops the last array element
// console.log(myArr);
myArr.unshift(9); //push the element at the first index and shifts all other values to one index ahead
// console.log(myArr);
myArr.shift(); // removes the element that is shifted\
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));


const newArr = myArr.join(); // converts the array into a string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);
//slice, splice

console.log("A",myArr);
const myn1= myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

const myn2= myArr.splice(1,3);
console.log(myn2);
console.log("C",myArr);