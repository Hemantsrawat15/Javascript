// console.table([2>1,2>=1,2<1,2==1,2!=1]);

/* ARITHMETIC OPERATORS such as + convert the number into string whereas 
COMPARISON OPERATORS such as <,>,<=,>= convert the string to a number */


console.log("2">1);
/*The comparison > between "2" (a string) and 1 (a number) involves type coercion in JavaScript.
JavaScript will first try to convert the string "2" to a number before performing the comparison.
The string "2" gets converted to the number 2.*/


console.log("02">1);
/*JavaScript will attempt to convert the string "02" to a number before performing the comparison.
The string "02" is successfully converted to the number 2, as leading zeroes are ignored in numeric conversion.*/


console.log(null>0);
/*When comparing null with a number, JavaScript converts null to a number for the comparison.
null is converted to 0 in numerical comparisons.
The comparison becomes: 0 > 0  // false
Since 0 is not greater than 0, the result is false.*/

console.log(null==0);
/*The == (loose equality) operator in JavaScript does not convert null to 0.
null is only loosely equal to undefined in JavaScript, not to any number, including 0.
Thus, null == 0 is false because null is considered different from 0.*/

console.log(null>=0);
/*This is a relational comparison (>=), so null is converted to a number, similar to the > comparison.
null is converted to 0, and the comparison becomes: 0 >= 0  // true
Since 0 is equal to 0, the result is true.*/ 



//strict check === (check value as well as data type)
console.log("2"==2); //true since "2" is converted into a number and then compared to number 2
console.log("2"===2); // false since "2" is a string and 2 is a number. === (strict check)