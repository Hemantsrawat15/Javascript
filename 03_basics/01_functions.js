function sayMyName(){
    console.log("Hemant");
}
sayMyName();

// function addTwoNumbers(number1, number2){ // when function defination is written then the elements inside () are known as paramters
//     console.log(number1+number2)
// }
// // when function is called then the elements inside () are known as arguements
// addTwoNumbers(3,4); //output => 7
// addTwoNumbers(3,"4") //output =>34
// addTwoNumbers(3,"a") //output => 3a
// addTwoNumbers(3,null) //output =>3

// const result = addTwoNumbers(3,4);  //output =>7
// console.log("Result :", result);  //output => undefined


function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}
addTwoNumbers(3,4); // doesnt give any output
const result=addTwoNumbers(3,4);  // stores the returned value to const result
console.log("Result :", result);  // output => Result : 7

// function loginUserMessage(username){
//     return `${username} just logged in`;
// }
// const message =loginUserMessage("Hemant");  //Hemant just logged in
// console.log(message);
// const message2= loginUserMessage(); // no arguements passed
// console.log(message2); //undefined just logged in

function loginUserMessage(username = "Sam"){  //giving default values to the username
    if(username === undefined){  // if(!username)
        console.log("Please enter an username");
        return;
    }
    return `${username} just logged in`;

}
const message2= loginUserMessage(); // no arguements passed
console.log(message2); //undefined just logged in

/******************** Fucntions part 2 ***********************/

// function calculateCartPrice(...num1){  // ... is rest/spread opeartor and on the basics of the usecase we name them either rest or either spread
//     return num1;
// }
// console.log(calculateCartPrice(2,4,5));  // output using rest(...) operator => [ 2, 4, 5 ]

function calculateCartPrice(val1,val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(2,4,5,6,7)); // val1= 2, val2=4, num1=[ 5, 6, 7 ]


const user ={
    username: "Hemant",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);


const myNewArray= [100,200,300,400];
function returnSecondValue(arr){
    return arr[1];
}
const secondValue = returnSecondValue(myNewArray);
console.log(secondValue);