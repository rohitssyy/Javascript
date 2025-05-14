// Understanding Object-Oriented Programming (OOP) in JavaScript

// Defining a class `House`

class House {
    // Constructor method to initialize properties of the `House` object

    constructor(color, bathroom, tiles) {

        this.color = color; // Property to store the color of the house
        this.bathroom = bathroom; // Property to store the bathroom status
        this.tiles = tiles; // Property to store the tile installation status

    }

    // Method to describe furniture installation

    Furniture() {

        console.log("furniture is installed"); // Logs a message to the console
        return "Hello World!!!"; // Returns a string

    }

    // Method to describe electricity status

    Electricity() {
        return "Electricity is working "; // Returns a string
    }
}

// Creating two instances of the `House` class with different properties

const House1 = new House("blue", "bathroom is working", "Tiles has not installed yet");
const House2 = new House("black", "bathroom is not working", "Tiles is installed");


// Logging the details of `House1`

console.log(House1); // Logs the `House1` object with its properties
console.log(House1.Furniture()); // Calls the `Furniture` method and logs its return value
console.log(House1.Electricity()); // Calls the `Electricity` method and logs its return value



// Logging the details of `House2`
console.log(House2); // Logs the `House2` object with its properties



// Defining a class `Human`
class Human {

    // Constructor method to initialize properties of the `Human` object

    constructor(name, age, gender, favouritefood, nationality) {
        this.name = name; // Property to store the name of the human
        this.age = age; // Property to store the age of the human
        this.gender = gender; // Property to store the gender of the human
        this.favouritefood = favouritefood; // Property to store the favorite food of the human
        this.nationality = nationality; // Property to store the nationality of the human
    }



    // Method to introduce the human
    intro() {
        console.log(
            this.name +
                " is my name and I am " +
                this.age +
                " years old " +
                "and my favourite food is " +
                this.favouritefood +
                " and it's a great time and day to code"
        ); // Logs a detailed introduction message
    }
}


// Creating an instance of the `Human` class
const person = new Human("Rohan", 20, "Male", "chicken", "Indian");

// Logging the details of the `person` object
console.log(person); // Logs the `person` object with its properties
console.log(person.intro()); // Calls the `intro` method and logs its output



// Understanding Objects and Prototypes in JavaScript

// #1: Pure Object
// Creating an object `person` with a method `talk`
const personObj = {
    talk() {
        return "Talking"; // Method that returns the string "Talking"
    }
};


// Creating a new object `me` using `Object.create`
// `me` inherits from `person`
const me = Object.create(personObj);
console.log(me.talk()); // Logs "Talking" because `me` inherits the `talk` method from `personObj`



// Creating another object `you` and setting its prototype to `personObj`
const you = {};
Object.setPrototypeOf(you, personObj); // Explicitly setting the prototype of `you` to `personObj`
console.log(you.talk()); // Logs "Talking" because `you` inherits the `talk` method from `personObj`



// #2: Prototype and `__proto__`
// Creating an empty object `obj`
const obj = {};
console.log(obj); // Logs the empty object

// Adding properties to the object
obj.name = "Rohit"; // Adding a `name` property to the object
obj.age = 22; // Adding an `age` property to the object
console.log(obj); // Logs the object with `name` and `age` properties




// Accessing the `toString` method from the object's prototype
console.log(obj.toString); // Logs the `toString` method from the prototype chain
// `toString` is inherited from the `Object.prototype`


// #3: Arrays and Prototypes
const ar = ["rohit", "rohan"]; // Creating an array
console.log(ar); // Logs the array



// Strings also have a prototype
const fname = "rohit"; // Creating a string
console.log(fname); // Logs the string
console.log(fname.__proto__); // Logs the prototype of the string, which contains string methods
// The prototype contains methods like `toUpperCase`, `toLowerCase`, etc.