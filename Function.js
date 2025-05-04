// Understanding the Basics of Functions in JavaScript


// #1: Simple Function

// This function logs "Hello" to the console when called.
function name1() {
  console.log("Hello"); // Logs "Hello" to the console
}
name1(); // Calling the function



// #2: Function with Parameters

// This function takes a name as a parameter and logs a greeting message.
function name2(name) {
  console.log("Hello", name); // Logs "Hello" followed by the name
}
name2("Rohit"); // Calling the function with "Rohit" as the argument



// #3: Function to Add Two Numbers

// This function takes two numbers as parameters and returns their sum.
function add(x, y) {
  return x + y; // Returns the sum of x and y
}
const x = add(2, 5); // Calling the function with 2 and 5 as arguments
console.log(x); // Logs the result (7)



// #4: Function to Check Even or Odd

// This function checks whether a given number is even or odd.
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return `${num} is Even`; // Returns a string indicating the number is even
  } else {
    return `${num} is Odd`; // Returns a string indicating the number is odd
  }
}
const check = checkEvenOdd(43951); // Calling the function with 43951 as the argument
console.log(check); // Logs "43951 is Odd"



// #5: Function to Calculate Factorial

// This function calculates the factorial of a given number using recursion.
function fact(n) {
  if (n <= 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  } else {
    return n * fact(n - 1); // Recursive case: n * factorial of (n-1)
  }
}
console.log(fact(0)); // Logs the factorial of 0 (1)



// #6: Arrow Function

// This is an arrow function that logs "Hello World" to the console.
const hi = (a) => {
  console.log("Hello World"); // Logs "Hello World" to the console
};
hi(); // Calling the arrow function
