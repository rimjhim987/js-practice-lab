// question-1 //
const numbers = [2, 4, 6, 8, 10];

const result = numbers.map((num) =>num*2)
console.log(result)

//question-2//
const names = ["rimjhim", "rahul", "aman", "priya"];
 
const p = names.map((name) => name.toUpperCase())
console.log(p)

//question-3//
const ages = [12, 18, 25, 16, 30, 15];
const a = ages.filter((num) => num>=18)
console.log(a)

//question-4//

const prices = [100, 500, 1200, 300, 2500, 800];
const b = prices.filter((num) => num>1000)
console.log(b)


//question-5//

const cart = [500, 1000, 250, 750];
const c = cart.reduce((accumulator , currentValue) =>{
    return accumulator + currentValue;
},0);
console.log(c)


//question-6//

const nums = [3, 7, 9, 11, 14, 18, 20];
const d = nums.find((num) => num %2 == 0)
console.log(d)

//question-7//

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
const e = fruits.slice(1,4)
console.log(e)


//question-9//

const students = [
    { name: "Rahul", marks: 85 },
    { name: "Riya", marks: 45 },
    { name: "Aman", marks: 72 },
    { name: "Priya", marks: 30 }
];

const f = students.filter(students => students.marks>= 50)
.map(students => students.name)

console.log(f)


//question-9//

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Phone", price: 30000 },
    { name: "Keyboard", price: 1500 }
];

const g = products.filter(products => products.price> 2000)
.map(products => products.name)
console.log(g)


//question-10//

const marks = [45, 80, 32, 90, 60, 25];
const h = marks.filter(marks => marks >= 50)
.map(marks => marks+5).reduce((total,marks) =>{
    return total + marks;
}, 0 )
console.log(h)