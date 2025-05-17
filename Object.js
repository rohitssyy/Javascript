// Understanding Objects and Prototypes in JavaScript

// #1: Pure Object
// Creating an object `person` with a method `talk`
const person = {
    talk() {
        return "Talking"; // Method that returns the string "Talking"
    }
};

// Creating a new object `me` using `Object.create`
// `me` inherits from `person`
const me1 = Object.create(person);
console.log(me1.talk()); // Logs "Talking" because `me` inherits the `talk` method from `person`

// Creating another object `you` and setting its prototype to `person`
const you = {};
Object.setPrototypeOf(you, person); // Explicitly setting the prototype of `you` to `person`
console.log(you.talk()); // Logs "Talking" because `you` inherits the `talk` method from `person`

// #2: Prototype and `__proto__`
// Creating an empty object `obj`
const obj = {};
console.log(obj); // Logs the empty object

// Adding properties to the object
obj.name = "Rohit";
obj.age = 22;
console.log(obj); // Logs the object with `name` and `age` properties

// Accessing the `toString` method from the object's prototype
console.log(obj.toString); // Logs the `toString` method from the prototype chain

// #3: Arrays and Prototypes
const ar = ["rohit", "rohan"]; // Creating an array
console.log(ar); // Logs the array

// Strings also have a prototype
const fname = "rohit";
console.log(fname); // Logs the string
console.log(fname.__proto__); // Logs the prototype of the string, which contains string methods

// #4: Object Inheritance with `Object.create`
const human1 = {
    kind: "Human", // Property shared by all objects inheriting from `human`
    greet: "Hello" // Another shared property
};

// Creating an object `rohit` that inherits from `human`
const rohit = Object.create(human1);
rohit.age = 22; // Adding a new property to `rohit`
console.log(rohit.age); // Logs 22 (own property)
console.log(rohit.kind); // Logs "Human" (inherited property)
console.log(rohit); // Logs the `rohit` object with its own and inherited properties

// Creating another object `rohan` that inherits from `rohit`
const rohan = Object.create(rohit);
rohan.age = 34; // Overriding the `age` property
console.log(rohan.kind); // Logs "Human" (inherited from `human`)
console.log(rohan.age); // Logs 34 (own property)
console.log(rohan); // Logs the `rohan` object with its own and inherited properties

// #5: Classes and Inheritance
// Defining a class `human` with a method `talk`
class human {
    talk() {
        return "Talking"; // Method that returns "Talking"
    }
}

// Defining a subclass `superhuman` that extends `human`
class superhuman extends human {
    fly() {
        return "Flying"; // Method that returns "Flying"
    }
}

// Creating an instance of `superhuman`
const rohan1 = new superhuman();
console.log(rohan1.fly()); // Logs "Flying" (method from `superhuman`)
console.log(rohan1.talk()); // Logs "Talking" (inherited method from `human`)
console.log(rohan1); // Logs the `rohan` object

// #6: Prototypes with Constructor Functions
// Defining a constructor function `Dude`
function Dude(name) {
    this.name = name; // Assigning the `name` parameter to the instance
}

// Creating an instance of `Dude`
const me = new Dude("Rohit");
console.log(me); // Logs the `Dude` object with the `name` property
console.log(Dude.prototype); // Logs the prototype of the `Dude` constructor
console.log(me.__proto__); // Logs the prototype of the `me` object (same as `Dude.prototype`)

// Checking if the prototype of `me` is the same as `Dude.prototype`
console.log(me.__proto__ === Dude.prototype); // Logs `true`

// Adding a method to the prototype of `Dude`
Dude.prototype.talk = function () {
    return "Talking"; // Method that returns "Talking"
};
console.log(me.talk()); // Logs "Talking" because `me` inherits the `talk` method from `Dude.prototype`