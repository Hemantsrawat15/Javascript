const marvel_heroes = ["Thor","IronMan","SpiderMan"];
const dc_heroes = ["SuperMan","Flash","Batman"];

// marvel_heroes.push(dc_heroes);  
// console.log(marvel_heroes); //[ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'Batman' ] ]
// console.log(marvel_heroes[3][0]); //output => SuperMan

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);  //[ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'Batman' ]

//Spread
// const allNewHeroes= [...marvel_heroes, ...dc_heroes]; //[ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'Batman' ]
// console.log(allNewHeroes); 


//Flat
const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(another_array);
const real_another_array = another_array.flat(Infinity);  //parameter is depth
console.log(real_another_array);

console.log(Array.isArray("Hemant"));  // false
//convert it into array
console.log(Array.from("Hemant")); // [ 'H', 'e', 'm', 'a', 'n', 't' ]

console.log(Array.from({name:"Hemant"})); // [] returns empty object

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]