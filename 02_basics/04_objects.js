// const tinderUSer1 = new Object();  // creates a singleton object
const tinderUser= {}; // does not creates singleton onject
console.log(tinderUser);
tinderUser.id= "123abc";
tinderUser.name ="Sam";
tinderUser.isLoggedIn= false;
console.log(tinderUser);

const regularUser ={
    email: "Hemant@gmail.com",
    // an object inside another object
    fullName:{
        userFullName:{ // nesting of objects
            firstName: "Hemant",
            lastName: "Rawat"
        }
    }
};
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);

//combining objects
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d",
}
// combine obj1 and obj2
// const obj3= {obj1,obj2};  // array vaali problem individual objects jaake store ho jaaege 
// console.log(obj3);  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3= Object.assign(obj1,obj2);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// // to write the same thing but with more good syntax
// const obj4 = Object.assign({},obj1,obj2);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  {}=>target and obj1,obj2are source
// console.log(obj3);
// console.log(obj4);

//mostly used is
const obj3= {...obj1, ...obj2};  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3);


//when values comes from database we usually get it in the form of arrays
//objects inside arrays
const users=[
    {
        id:1,
        email:"Hemant@gmail.com"
    },
    {
        id:1,
        email:"Hemant@gmail.com"
    },
    {
        id:1,
        email:"Hemant@gmail.com"
    },
    {
        id:1,
        email:"Hemant@gmail.com"
    }
];

console.log(users[1].email);  //Hemant@gmail.com

console.log(Object.keys(tinderUser)); // returns us an array of all the keys of tinderUser object => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // returns us an array of all the values of tinderUser object => [ '123abc', 'Sam', false ]
console.log(Object.entries(tinderUser)); // returns us an array of all the key value pair of tinderUser object => [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // output => true
console.log(tinderUser.hasOwnProperty('isLogged'));  // output => false