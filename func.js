function first() {
    console.log("Entered first()");
    
    second();
    
    console.log("Leaving first()");
}

function second() {
    console.log("Entered second()");
    console.log("Leaving second()");
}

console.log("Program started");

first();

console.log("Program finished");


//map //
const names = ["rimjhim", "rahul", "aman"];

const upperNames = names.map((name) => name.toUpperCase());

console.log(upperNames);

//find//
const numbers = [5, 10, 15, 20];

 const res = numbers.find(num => num > 10);
console.log(res);
//filter//
const number = [5, 10, 15, 20];

const p=number.filter(num => num > 10);
console.log(p);

//slice//
const num = [10, 20, 30, 40, 50];

const result = num.slice(1, 4);

console.log(result);

//reduce//

const nums = [10, 20, 30];

const total = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(total);