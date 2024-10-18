const myObject={
    js:'Javascipt',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
} 

// for in loop
// for (const key in object) {
    
// }

for (const key in myObject) { // prints all the keys
    console.log(key);
}

for (const key in myObject) { // prints all the values
    console.log(`${key} is for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']
for (const key in programming) {
    console.log(programming[key]);
}