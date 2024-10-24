// Promises in javascript have two parts 1.Creating 2.Consuming

// Creating a promise

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    setTimeout(function(){
        console.log('Async task is complete');
        resolve(); // now it is connected to .then
    },1000)
}); // creates a new promise

// Consumption
promiseOne.then(function(){
    console.log('Promise consumed');
}) // then has a connection with resolve

// Without storing promise in a variable and doing creating and cosuming in one part only

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username: "Chai",
            email: "chai@example.com"
        })
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username: "Hemant",
                password:"123"
            })
        }
        else{
            reject('Error: Something went wrong')
        }
    },2000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username: "Javascript",
                password:"123"
            })
        }
        else{
            reject('Error: Js went wrong')
        }
    },2000)
})
// not necessary to use then we also have an alternative async await

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);  
    } catch (error) {
      console.log(error);  
    }
}
consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers();

// Writing the same method in .then .catch format

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})