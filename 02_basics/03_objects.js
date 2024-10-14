// singleton
// jab hum literals ki tarah objects define karte hai toh singleton nahi banta hai
// jab constructors se object banega toh singleton banega that is using Object.create

//object literals

const mySymbol = Symbol("key1"); // now use this symbol as a key in object
const JsUser= {
    name:"Hemant", // system by default name(key) ko string le leta hai but hum as a string nahi likhte hai
    "Full Name":"Hemant Singh Rawat", // there is no chance to access Full Name using JsUser.Full Name instead we have to use JsUser["Full Name"];
    [mySymbol]: "mykey1", //using symbol in an object
    age:18,
    location:"Jaipur",
    email:"Hemant@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"] 
}

// how to access objects
console.log(JsUser.email); // First method
console.log(JsUser["email"]) // Second method use "email" as we discussed ki system mei key value as string store hoti hai
console.log(JsUser["Full Name"]);
console.log(JsUser[mySymbol]); // accesing the value of the key mySymbol


JsUser.email="Hemant@chatgpt.com"; // change values
// Object.freeze(JsUser); // freezes the object JsUser and we will be unable to edit anything in the object
JsUser.email="Hemant@microsoft.com"; // this will not take plce since we have freezed the object
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(JsUser.greeting());  // output => Hello Js User undefined
console.log(JsUser.greeting);  //output => [Function (anonymous)]

JsUser.greetingTwo= function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo());  // output => Hello JS user, Hemant undefined
console.log(JsUser.greetingTwo);  // output => [Function (anonymous)]

