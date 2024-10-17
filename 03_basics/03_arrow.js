const user ={
    username: "Hemant",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}
user.welcomeMessage();
user.username="Sam";
user.welcomeMessage();
// console.log(this);  //for this the global object is {}

// this works in objects only not in functions
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai();

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai();


//normal arrow function
const addTwo = (num1,num2) => {
    return num1+num2;
}
console.log(addTwo(3,4));

// implicit return
// const addTwo1 = (num1,num2) => num1+num2;
// const addTwo1 = (num1,num2) => (num1+num2);
// console.log(addTwo1(3,4));

//when we want to return an object we have to wrap it into parenthesis
const addTwo2 = (num1,num2) => ({username:"Hemant"});
console.log(addTwo2(3,4));

