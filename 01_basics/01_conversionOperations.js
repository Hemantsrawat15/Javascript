let score = "Hemant"
console.log(typeof score); //console.log(typeof (score));
let valueInNumber= Number(score) //converts the string "33" to a number 33;
console.log(typeof valueInNumber); // number
console.log(valueInNumber);  //Nan when (score="33abc" || score==undefined) and 0 when score= null


// "33" => 33
//"33abc" => NaN
//true => 1 , false =>0

let isLoggedIn=1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof (booleanIsLoggedIn));
console.log(booleanIsLoggedIn);

// 1=> true , 0 =>false;
// "" => false;
// "Hemant" => true;

let someNumber= 33;
let stringNum= String(someNumber);
console.log(typeof (stringNum));
console.log(stringNum);