// Understanding Factory Functions in JavaScript


// #1: Creating Objects Directly
// Object `me1` with a property `fname` and a method `talk`

const me1 = {
    fname: "rohit", // Property `fname` with the value "rohit"
    talk() {
        return `Hello i am ${this.fname}`; // Method `talk` that uses `this` to access `fname`
    }
};

// Object `Rohan` with a property `fname` and a method `talk`
const Rohan = {
    fname: "Rohan", // Property `fname` with the value "Rohan"
    talk() {
        return `Hello i am ${this.fname}`; // Method `talk` that uses `this` to access `fname`
    }
};

// Calling the `talk` method for both objects
console.log(me1.talk()); // Logs: "Hello i am rohit"
console.log(Rohan.talk()); // Logs: "Hello i am Rohan"

// Logging the entire objects
console.log(me1); // Logs the `me1` object
console.log(Rohan); // Logs the `Rohan` object

// Overwriting the `fname` property of `me1`
me1.fname = "karan"; // Modifies the `fname` property of `me1`
console.log(me1); // Logs the updated `me1` object with `fname` as "karan"

// #2: Using Factory Functions
// A better way to create objects with similar structure and behavior
function Factoryfunction(name) {
    return {
        talk() {
            return `Hello i am ${name}`; // Method `talk` uses the `name` parameter
        }
    };
}

// Creating objects using the factory function
const me = Factoryfunction("Rohit"); // Creates an object with `name` as "Rohit"
console.log(me.talk()); // Logs: "Hello i am Rohit"

const r2 = Factoryfunction("Rohan"); // Creates an object with `name` as "Rohan"
console.log(r2.talk()); // Logs: "Hello i am Rohan"