// Immediately Invoked Fucntion Expressions (IIFE)

function chai(){

    // named IIFE
    console.log(`DB CONNECTED`);
}
chai();  // simple execution

(function chai2(){
    console.log(`DB CONNECTED`);
})(); // immediately invoking the function

//Whenever we write two IIFE then we hve to give ; in the end. Only then both IIFE will run

// ()() In IIFE the first bracket contains the defination of the function and the second bracket is the execution call

// Why use IIFE ?? => Sometimes due to global scope pollution problems occur. Hence to remove the global scope pollution we use IIFE

//Using arrow function in IIFE

( () => {
    console.log(`DB CONNECTED TWO`);
})();

//using parameters in arror function IIFE
 
( (name) => {
    console.log(`My name is ${name}`);
})("Hemant");