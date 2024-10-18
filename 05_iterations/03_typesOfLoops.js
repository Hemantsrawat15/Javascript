// for of


const arr = [1,2,3,4,5]
// for (const element of object) {
    
// }

for (const num of arr) {
    console.log(num);
}

const greeting ="Hello world";
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN',"India");
map.set('US',"United States Of America");
map.set('FR',"France");
console.log(map);

for (const [key,value] of map) {
    console.log(key, ":-", value);
}

const myObject ={
    game1 :"NFS",
    gam2e2 : "SpiderMan"
}
// cannot iterate object like this
// for (const [key,value] of myObject) {
//     console.log(key, ":-", value);
// }

