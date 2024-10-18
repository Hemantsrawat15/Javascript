const userEmail= "Hemant@gmail.com";  // Got user Email
// const userEmail= "";  //Don't have user email
// const userEmail= [];  // Got user Email


if(userEmail){
    console.log("Got user Email");
}else {
    console.log("Don't have user email");
}

//FALSY VALUES => false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
//TRUTHY VALUES =>  "0" , 'false' , " " , [] , {} , function(){}

const userEmailArray = [];
if(userEmailArray.length === 0){
    console.log("Array is empty");
}

const userEmailObject = {};
if(Object.keys(userEmailArray).length === 0){  // Object.keys(userEmailArray) gives us an array of keys
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 =5 ?? 10; 
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 10;
console.log(val1);

// Terniary operator
// condition ? true : false
const iceTeaPrice= 100;
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");