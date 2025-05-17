// Example 1: Accessing property of undefined variable
try {
    // 'a' is declared but not initialized, so 'a' is undefined.
    // Accessing 'a.length' will throw a TypeError.
    let a; 
    console.log(a.length);
    console.log("Hi from here inside try");
}
catch(e){
    // This block will execute if any error occurs in the try block.
    console.log("Hello Error happened");
}
finally {
    // This block will always execute, regardless of error.
    console.log("End");
}

// Example 2: Parsing invalid JSON
try {
    // This will throw a SyntaxError because the string is not valid JSON.
    JSON.parse("This is not JSON");
}
catch(e) {
    console.log("Caught JSON parse error:", e.message);
}

// Example 3: Division by zero (no error in JS, but let's check)
try {
    let result = 10 / 0; // In JS, this results in Infinity, not an error.
    console.log("Result is:", result);
}
catch(e) {
    console.log("This will not run, as division by zero does not throw an error in JS.");
}

// Example 4: ReferenceError
try {
    // Trying to use an undeclared variable will throw a ReferenceError.
    console.log(notDeclaredVariable);
}
catch(e) {
    console.log("Caught ReferenceError:", e.message);
}

// Example 5: Manually throwing an error
try {
    // You can throw your own errors using 'throw'.
    throw new Error("This is a custom error!");
}
catch(e) {
    console.log("Caught custom error:", e.message);
}
