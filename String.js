// Everything you need to know about Strings :>

//A string is a sequence of characters used to represent text.

// Strings are primitive data types in JavaScript.
// They can be written using:
        // Double quotes "text"
        // Single quotes 'text'
        // Backticks `text` (for template literals)

let name1 = "Rohit"
let greet = 'Hi'
let greetings = `Welcome, ${name1}`

console.log(greetings)
console.log(name1.length)


//  Searching & Finding

console.log("hello".includes("hell"))  // ->true	Checks if a substring exists

console.log("hellolo".indexOf("l")) // ->2 Finds first index of substring

console.log("hellolo".lastIndexOf("l")) // ->5 Finds last index

console.log("rohit".startsWith("r")) // ->true Checks beginning if it start same string

console.log("rohit".endsWith("r")) // ->false Checks ending, if it ends with same string


// Slicing & Modifying

console.log("RohitSingh".slice(5,10)) // -> Singh slice(start, end) Extracts part of string

console.log("Rohit".substring(5,-10))

// Trimming & Cleaning

let hi = "  hi my name is rohan          "
console.log(hi)  
console.log(hi.trim()) // Removes leading/trailing spaces


const js = "           this    is  js          "
console.log(js)
//Removes spaces from one side	
console.log(js.trimStart())
console.log(js.trimEnd()) 


// Changing Case

console.log("rohitsingh".toUpperCase()) // Converts to UPPERCASE
console.log("ROHITSINGH".toLowerCase()) // Converts to lowercase


//  Combining & Repeating

const a = "Rohit"
const b = "Singh"
console.log(a.concat(b))
console.log("Hi ".concat(a, b)) // Joins strings

console.log("R"+"S"+"Y") // Also joins strings
console.log("JavaScript , ".repeat(5)) // Repeats string


// Replacing & Splitting

console.log("Rohit Ronauk".replace("Ro", "Mo")) // Replaces first match	
console.log("Rohit Ronauk".replaceAll("Ro", "Mo")) // Replaces all matches

console.log("Rohit Rohan".split(" "))
console.log("Rohit Singh ".split("")) // Splits string into array


//Always use trim() when dealing with user input.
//Use toLowerCase() when comparing text inputs (like email).
//Prefer template literals (`Hi ${name}`) over + for readability.


// 🔁 Useful in Web Development Scenarios


// ✅ Form Input Cleaning
// let input = "   Rohit   ";
// let clean = input.trim();



// ✅ Checking Email Format (basic)
// let email = "test@example.com";
// if (email.includes("@")) { /* valid */ }



// ✅ Building HTML content dynamically
// let name = "Rohit";
// let html = `<p>Welcome, ${name}</p>`;