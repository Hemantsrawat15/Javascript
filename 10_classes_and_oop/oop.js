// Object literal
const user = {
    username : "Hemant",
    loginCount: 8,
    signedIn: true,
    getUserDetails : function(){
        console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
    }
}
console.log(user.username);
console.log(user.getUserDetails())

function User(username , loginCount, isLoggedIn){
    this.username= username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

// const user1 = User("Hemant", 10, true);
// const user2 = User("Pokemon", 20, false); // the values of user1 get altered
// console.log(user1);


const user1 = new User("Hemant", 10, true);
const user2 = new User("Pokemon", 20, false); // the values of user1 get altered
console.log(user1);
console.log(user2);