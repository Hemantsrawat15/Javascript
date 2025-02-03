let score = "Hemant"
// console.log(typeof score); //console.log(typeof (score));
let valueInNumber= Number(score) //converts the string "33" to a number 33;
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber);  //Nan when (score="33abc" || score==undefined) and 0 when score= null


// "33" => 33
//"33abc" => NaN
//true => 1 , false =>0

let isLoggedIn=1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof (booleanIsLoggedIn));
// console.log(booleanIsLoggedIn);

// 1=> true , 0 =>false;
// "" => false;
// "Hemant" => true;

let someNumber= 33;
let stringNum= String(someNumber);
// console.log(typeof (stringNum));
// console.log(stringNum);

//*********************** OPERATIONS *****************************

// console.table([2+2,2-2,2*2,2**3,2/3,2%3]);

let str1= "Hello";
let str2= " Hemant";
let str3= str1+str2;
// console.log(str3);


/*In JavaScript, when using the + operator between a number and a string, the priority is given to string concatenation, not numeric addition. This is because the + operator is overloaded: it performs both addition (when both operands are numbers) and concatenation (when one of the operands is a string). When one of the operands is a string, JavaScript automatically converts the other operand to a string and performs concatenation.*/


console.log("1"+2);
console.log(typeof (1+"2"));
/*The first value is the string "1", and JavaScript will convert the 2 (a number) into a string and concatenate it with "1".
So, the expression becomes "1" + "2", which results in the string "12".
JavaScript uses type coercion here, where the number 2 is coerced to a string.*/

console.log(1+"2");
console.log(typeof (1+"2"));
/*Here you have a number 1 and a string "2". JavaScript performs type coercion, converting the number 1 to a string, so the expression becomes "1" + "2", resulting in "12".Therefore, the output is the string "12".*/


console.log("1"+2+2);
console.log(typeof ("1"+2+2));
/*The first part is "1" + 2. Since "1" is a string, the number 2 is converted to a string, so "1" + "2" results in "12".
Then, you have "12" + 2. Again, JavaScript converts the number 2 to a string, so "12" + "2" becomes "122".
Thus, the final result is the string "122".*/


console.log(1+2+"2");
console.log(typeof (1+2+"2"));
/*The first part is 1 + 2, which results in 3 (since both are numbers, normal addition occurs). Now you have 3 + "2". Since one of the operands is a string, JavaScript converts the number 3 to a string, so "3" + "2" results in "32". Therefore, the final result is the string "32". */
