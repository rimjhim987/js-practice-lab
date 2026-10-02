const student = {
    name: "Rimjhim",
    age: 20,

    study() {
        console.log("Student is studying");
    }
};

const student1 = {
    name: "Rimjhim"
};

const student2 = {
    name: "Rahul"
};

class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    study() {
        console.log(this.name + " is studying");
    }
}
const student1 = new Student("Rimjhim", 20);

const student2 = new Student("Rahul", 21);
//methods
class Student {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }
}
const student = new Student("Rimjhim", 20);

class Student {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }
}
const student1 = new Student("Rimjhim", 20);


class Student {

    constructor(name) {
        this.name = name;
    }

    study() {
        console.log(this.name + " is studying");
    }

    introduce() {
        console.log("My name is " + this.name);
    }
}
const student = new Student("Rimjhim");

student.study();
student.introduce();
 //encapsulation
class BankAccount {

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }
}
//abstract class
class CoffeeMachine {

    makeCoffee() {
        this.#heatWater();
        this.#addCoffee();

        console.log("Coffee is ready!");
    }

    #heatWater() {
        console.log("Heating water...");
    }

    #addCoffee() {
        console.log("Adding coffee...");
    }
}
machine.makeCoffee();

//inheritance
//parent class
class Animal {

    eat() {
        console.log("Animal is eating");
    }
}
//child class
class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }
}
const dog = new Dog();

dog.eat();
dog.bark();

//super keyword
class Dog extends Animal {

    constructor(name, breed) {

        super(name);

        this.breed = breed;
    }
}
super(name);
//polymorphism
class Animal {

    makeSound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {

    makeSound() {
        console.log("Dog barks");
    }
}
class Cat extends Animal {

    makeSound() {
        console.log("Cat meows");
    }
}
const animals = [
    new Dog(),
    new Cat()
];

animals.forEach(function(animal) {
    animal.makeSound();
});

//complete oops concept
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }
}


class Student extends Person {

    constructor(name, age, course) {

        super(name, age);

        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}`);
    }
}


const student1 = new Student(
    "Rimjhim",
    20,
    "JavaScript"
);


student1.introduce();

student1.study();