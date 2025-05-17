// Example 1: Basic Closure
// The inner functions 'sayHi' and 'feel' have access to the 'name' variable
// even after 'human' has finished executing.
function human(name) {
    function sayHi() {
        console.log(`Hi I am ${name}`);
    }
    function feel() {
        console.log(`${name} how you feel`);
    }
    sayHi();
    feel();
}
human("rohan");

// Example 2: Closure Returning a Function
// The returned function remembers the 'greeting' variable from its outer scope.
function greeter(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}
const sayHello = greeter("Hello");
sayHello("Alice"); // Output: Hello, Alice!

// Example 3: Counter using Closure
// The inner function 'increment' has access to 'count' even after 'createCounter' finishes.
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log("Current count:", count);
    };
}
const counter = createCounter();
counter(); // Output: Current count: 1
counter(); // Output: Current count: 2

// Example 4: Private Variables with Closures
// The variable 'secret' is not accessible from outside, only via the returned function.
function secretHolder(secret) {
    return function() {
        console.log("The secret is:", secret);
    };
}
const revealSecret = secretHolder("JavaScript is fun!");
revealSecret(); // Output: The secret is: JavaScript is fun!

// Example 5: Closure in a Loop (using let)
// Each function remembers its own value of 'i' due to block scoping with 'let'.
function loopClosures() {
    let funcs = [];
    for (let i = 0; i < 3; i++) {
        funcs.push(function() {
            console.log("Value of i:", i);
        });
    }
    return funcs;
}
const myFuncs = loopClosures();
myFuncs[0](); // Output: Value of i: 0
myFuncs[1](); // Output: Value of i: 1
myFuncs[2](); // Output: Value of i: 2

// Closures are powerful for creating private variables, function factories, and maintaining state.