// if

const isUserLoggedIn= true;

if (isUserLoggedIn) {  // condition should be true so that we can go inside if block
    console.log(`Welcome to the website`)
}

// basic comparsion operators
// < , > , <= , >= , == , != , === , !== (negative sign check) 

if(2=="2"){
    console.log("executed");
}  // loose equaltiy

if(2==="2"){
    console.log("executed1");
} // strict equaltiy

const temperature = 41;
if(temperature< 50){
    console.log("Less than 50");
}
else{
    console.log("more than 50");
}

const score= 200;
if(score>100){
    let power ="fly";
    console.log(`User power: ${power}`);
}

const balance =1000;
if(balance > 500) console.log("test"); //implicit scope

if(balance<500){
    console.log("less than")
} else if(balance<750){
    console.log("less tha 750");
} else{
    console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard= true;
const loggedInFromGoogle= false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}

