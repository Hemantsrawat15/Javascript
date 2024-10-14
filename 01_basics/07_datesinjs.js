let myDate= new Date();
console.log(typeof myDate);
console.log(myDate.toString());  //Mon Oct 14 2024 08:36:00 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());  //Mon Oct 14 2024
console.log(myDate.toISOString());  //2024-10-14T08:38:02.547Z
console.log(myDate.toJSON()); //2024-10-14T08:40:34.511Z
console.log(myDate.toLocaleDateString());  //10/14/2024
console.log(myDate.toLocaleString()); //10/14/2024, 8:44:13 AM

let myCreatedDate = new Date(2024, 0, 23);  // months start from 0-> January to 11-> December
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2024, 0, 23, 5, 3);  // 1/23/2024, 5:03:00 AM
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2024-01-14");  // 1/14/2024, 12:00:00 AM
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("01-14-2024");  // 1/14/2024, 12:00:00 AM
console.log(myCreatedDate4.toLocaleString());

//Timestamps
let myTimeStamp = Date.now();  //gives us how much time in millisecond has passed from 01 jaunary 1970 to today's date
console.log(myTimeStamp);
console.log(myCreatedDate4.getTime()); ////gives us how much time in millisecond has passed from 01 jaunary 1970 to the given date


console.log(Date.now()/1000); // convert milliseconds into seconds but get us the value in decimal
console.log(Math.floor(Date.now()/1000));  // converts the decimal into round up figure

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());