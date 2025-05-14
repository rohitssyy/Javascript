// Understanding `this` in JavaScript

// #1: `this` in the global context
console.log(this); // Logs the global object (Window in browsers, global in Node.js)

// #2: `this` inside a regular function
function talk() {
    return this; // `this` refers to the global object in non-strict mode
}
console.log(talk()); // Logs the global object

// #3: `this` inside an object method
const me = {
    fname: "Rohit",
    talk: talk // Assigning the `talk` function to the object
};
console.log(me.talk()); // Logs the `me` object because `this` refers to the object calling the method

// #4: `this` inside a function returning a string
function talk() {
    return `I am ${this.name}`; // `this` refers to the object calling the function
}
console.log(talk()); // Logs "I am undefined" because `this` refers to the global object, and `name` is not defined globally

const me2 = {
    name: "Rohit",
    talk // Assigning the `talk` function to the object
};
console.log(me2.talk()); // Logs "I am Rohit" because `this` refers to the `me2` object

// #5: Binding `this` to a specific object
function talk() {
    return `I am ${this.name}`;
}

const me3 = {
    name: "Rohit"
};

// Using `bind` to explicitly bind `this` to `me3`
console.log(talk.bind(me3)); // Logs the bound function
console.log(talk.bind(me3)()); // Logs "I am Rohit" because `this` is bound to `me3`

const k = talk.bind(me3); // Storing the bound function in a variable
console.log(k()); // Logs "I am Rohit"
console.log(talk.call(me3)); // Logs "I am Rohit" using `call`

// #6: Passing arguments with `call`
function talk(hi) {
    if (hi === "ni hao") {
        return `I am ${this.name} and I know a language`;
    } else if (hi === "hello") {
        return `I am ${this.name} and I know English`;
    }
}

const me4 = {
    name: "Rohit"
};
console.log(talk.call(me4, "hello")); // Logs "I am Rohit and I know English"

// #7: `this` inside a constructor function
function Person(n) {
    this.name = n; // Assigning the parameter to the instance
    console.log(this); // Logs the instance of the object
    this.talk = function () {
        console.log(this); // Logs the instance of the object
    };
}

const i = new Person("Rohit"); // Creates a new instance of `Person`
console.log(i); // Logs the `Person` object
console.log(i.talk()); // Logs the `Person` object and undefined (because `talk` does not return anything)

// #8: `this` in a callback function
function Person(n) {
    this.name = n; // Assigning the parameter to the instance
    console.log(this); // Logs the instance of the object
    this.talk = function () {
        console.log(this); // Logs the instance of the object
    };

    // `this` inside a regular function in `setTimeout` refers to the global object
    setTimeout(function () {
        console.log(this); // Logs the global object (Window in browsers)
    }, 2000);
}

const me5 = new Person("Rohan"); // Creates a new instance of `Person`
console.log(me5); // Logs the `Person` object

// #9: Fixing `this` in a callback function using `bind`
function Person(n) {
    this.name = n; // Assigning the parameter to the instance
    console.log(this); // Logs the instance of the object
    this.talk = function () {
        console.log(this); // Logs the instance of the object
    };

    // Using `bind` to explicitly bind `this` to the instance
    setTimeout(function () {
        console.log(this); // Logs the instance of the object
    }.bind(this), 2000);

    // Alternatively, using an arrow function (arrow functions do not have their own `this`)
    setTimeout(() => {
        console.log(this); // Logs the instance of the object
    }, 2000);
}

const me6 = new Person("Rohan"); // Creates a new instance of `Person`
console.log(me6); // Logs the `Person` object


