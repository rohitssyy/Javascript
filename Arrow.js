// Understanding Arrow Functions in JavaScript

// #1: Converting a Function to an Arrow Function
// Regular function to calculate the sum of two numbers
function sum(a, b) {
  return a + b;
}
// Converted to an arrow function
const x = (a, b) => a + b; // Arrow function with implicit return
console.log(x(2, 3)); // Logs 5

// #2: Arrow Function with a Single Parameter
// Regular function to check if a number is positive
function isPositive(number) {
  return number >= 0;
}
// Converted to an arrow function
const isPositive = (num) => num >= 0; // Parentheses are optional for a single parameter
console.log(isPositive(-5)); // Logs false

// #3: Arrow Function with No Parameters
// Regular function to generate a random number
function randomNumber() {
  return Math.random();
}
// Converted to an arrow function
let random = () => Math.random(); // Arrow function with no parameters
console.log(random()); // Logs a random number

// #4: Arrow Function with Multiple Statements
// Arrow function to multiply two numbers and log the inputs
let multiply = (a, b) => {
  console.log(a); // Logs the first parameter
  console.log(b); // Logs the second parameter
  return a * b; // Returns the product of a and b
};
console.log(multiply(2, 4)); // Logs 2, 4, and 8

// #5: Using Arrow Function in an Object with `setTimeout`
// Demonstrating the use of `this` in an arrow function
const P = {
  fname: "rohit",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello ${this.fname}`); // Arrow function retains the context of `this`
    }, 5000); // Executes after 5 seconds
  },
};
P.greet(); // Logs "Hello rohit" after 5 seconds

// #6: One-Liner Condition with Arrow Function
// Arrow function to check if a person is eligible to vote
const isVoter = (age) => age >= 21; // Returns true if age is 21 or above
console.log(isVoter(15)); // Logs false
console.log(isVoter(25)); // Logs true

// #7: Using `map` with Arrow Function
// Squaring each element in an array using `map`
let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarr = arry.map((num) => num * num); // Maps each element to its square
console.log(newarr); // Logs [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// #8: Using `filter` with Arrow Function
// Filtering even numbers from an array
let arr = [1, 23, 3, 4, 454, 54, 67, 43, 0, 4, 8, 9];
let evenarr = arr.filter((i) => i % 2 == 0); // Filters elements divisible by 2
console.log(evenarr); // Logs [4, 454, 54, 0, 4, 8]

// #9: Using `reduce` with Arrow Function
// Summing up all elements in an array using `reduce`
let ar1 = [50, 50, 100, 200];
let sum = ar1.reduce((tot, num) => tot + num, 1); // Starts with an initial value of 1
console.log(sum); // Logs 401

// #10: Using Rest Parameters with Arrow Function
// Arrow function to sum all numbers passed as arguments
const SumALL = (...num) => num.reduce((sum, num) => sum + num, 0); // Sums up all numbers
console.log(SumALL(5, 5, 5, 5, 5)); // Logs 25
console.log(SumALL(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Logs 55

// #11: Difference Between Arrow Functions and Normal Functions
// Demonstrating the difference in `this` behavior
class Person {
  constructor(name) {
    this.name = name; // Assigns the name to the instance
  }

  // Arrow function retains the context of `this`
  Arrowfunction() {
    setTimeout(() => {
      console.log("Arrow: " + this.name); // Logs the name of the instance
    }, 2000); // Executes after 2 seconds
  }

  // Normal function redefines `this` (loses context)
  Normalfunction() {
    setTimeout(function () {
      console.log("Normal: " + this.name); // `this` is undefined here
    }, 3000); // Executes after 3 seconds
  }
}
let P1 = new Person("Rohit");
P1.Arrowfunction(); // Logs "Arrow: Rohit" after 2 seconds
P1.Normalfunction(); // Logs "Normal: undefined" after 3 seconds