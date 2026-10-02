const reem = {
    name: "rimjhim",
    age: 19,
    collage: "GCET",
    isStudent: true,
    hobbies: ["Coding", "Movies"],
    address: {
        city: "Noida",
        state: "UP"
    },

    greet: function(){
        console.log("hello")
    },
};

//{}- object literal
//console.log(reem.name)
//console.log(reem["age"])
//reem.game = "ludo"
//console.log(reem)
//delete reem.game;
//console.log(reem)
//console.log(reem.address.city)

console.log(reem.hobbies[0])
reem.greet()



/*const calculator = {
    add: function (a, b) {
        return a + b;
    }
};*/

//console.log(calculator.add(5, 3));


const user1 = {
    name: "yuvi"
}
const user2 = user1;

user2.name = "aditi";
console.log(user1.name)


const person = {
    name: "Rimjhim",

    greet: function () {
        console.log(this.name);
    }
};

person.greet();