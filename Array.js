// Understanding Arrays and Array Methods in JavaScript

// #1: Function Example
const greet = () => {
  console.log("Hello");
};
greet(); // Calling the function
console.log(greet); // Logs the function definition

// #2: Basic Array Operations
let array = [1, 23, 4, 435, 43];
console.log(array[1]); // Accessing the second element (23)

array.push(2); // Adding an element to the end of the array
console.log(array); // Logs the updated array

console.log(array.pop()); // Removes and logs the last element (2)

array.unshift(3464); // Adding an element to the beginning of the array
console.log(array); // Logs the updated array

array.shift(); // Removes the first element
console.log(array); // Logs the updated array

// #3: Looping Through an Array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // Logs each element
  sum += arr[i]; // Adds each element to the sum
}
console.log("Sum of the elements in the array is:", sum); // Logs the total sum

// #4: Filtering Even Numbers
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]); // Logs even numbers
  }
}

// #5: Using `forEach` Method
const b = [2, 6, 11, 8];
b.forEach(function (element, index, array) {
  console.log(array); // Logs the entire array
  console.log("Element at the index:", index, "is", element * element); // Logs the square of each element
  console.log("--");
  console.log(`Element at the index ${index} is ${element}`);
});

// #6: Converting Strings to Uppercase
let words = ["asd", "cv", "dasd", "ghj", "jh"];
let upWord = [];
words.forEach(function (i) {
  upWord.push(i.toUpperCase()); // Converts each string to uppercase and adds to the new array
});
console.log(upWord); // Logs the array with uppercase strings

// #7: Summing Up Array Elements
let arr2 = [1, 2, 3, 4];
let s = 0;
arr2.forEach(function (ok) {
  s += ok; // Adds each element to the sum
});
console.log(s); // Logs the total sum

// #8: Doubling Array Elements
let a = [1, 2, 3, 4];
console.log(a); // Logs the original array
let d = [];
a.forEach((i) => d.push(i + i)); // Doubles each element and adds to the new array
console.log(d); // Logs the doubled array

// #9: Filtering Strings Longer Than 3 Characters
const strings = ["words", "mom", "asd", "sdf", "tttttt"];
const longerThanThree = [];
strings.forEach((i) => {
  if (i.length > 3) {
    longerThanThree.push(i); // Adds strings longer than 3 characters to the new array
  }
});
console.log(strings); // Logs the original array
console.log(longerThanThree); // Logs the filtered array

// #10: Using `map` Method
// Doubling Array Elements
const oldArr = [1, 2, 3, 4, 5];
const newArr = oldArr.map((i) => i * 2); // Doubles each element
console.log(newArr); // Logs the new array

// Converting Strings to Uppercase
let arr1 = ["sdas", "asd", "Sadsad", "SDasd", "Sadas"];
let an = arr1.map((anything) => anything.toUpperCase()); // Converts each string to uppercase
console.log(arr1); // Logs the original array
console.log(an); // Logs the array with uppercase strings

// Extracting Object Properties
const obj = [
  { name: "rohit", course: "bca" },
  { name: "rahul", course: "B.tech" },
];
const courses = obj.map((c) => c.course); // Extracts the `course` property from each object
console.log(courses); // Logs the array of courses

// Adding Index to Elements
let att = ["rohit", "Rohan", "rahul"];
let ind = att.map(function (i, index) {
  return `${i} positions at ${index}`; // Adds the index to each element
});
console.log(ind); // Logs the array with indexed elements

// Squaring Array Elements
const arr3 = [1, 2, 3, 4, 5];
const sq = arr3.map((items) => items * items); // Squares each element
console.log(sq); // Logs the squared array

// #11: Using `filter` Method
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filarr = array2.filter((elements) => elements % 2 == 0); // Filters even numbers
console.log(filarr); // Logs the filtered array

// #12: Using `reduce` Method
const arr4 = [1, 2, 3, 4, 5];
let res = arr4.reduce((total, element) => total + element, 100); // Sums up all elements starting with 100
console.log(res); // Logs the total sum

// Finding the Maximum Element
const ar = [1, 5, 88, 4, 6, 9];
let high = ar.reduce((accum, element) => Math.max(accum, element), 0); // Finds the maximum element
console.log(high); // Logs the maximum value

// #13: Using `find` Method
const array3 = [1, 23, 4534, -4, 6];
let f = array3.find((i) => i > 1000); // Finds the first element greater than 1000
console.log(f); // Logs the found element

// #14: Flattening a Matrix
let matrix = [
  [1, 2, 3, 78],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[0][2]); // Accessing an element in the matrix
console.log(matrix[1][1]); // Accessing another element
console.log(matrix[2][2]); // Accessing another element
console.log(matrix[1].length); // Logs the length of the second row

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]); // Logs each element in the matrix
  }
  console.log(""); // Adds a blank line between rows
}

let flatt = matrix.flat(); // Flattens the matrix into a single array
console.log(flatt); // Logs the flattened array

let totalSum = matrix.flat().reduce((total, i) => total + i); // Sums up all elements in the flattened array
console.log(totalSum); // Logs the total sum

// #15: Using `includes` Method
const a2 = [1, 2, 3, 4, 5, 6, 7];
const incTwo = a2.includes(5); // Checks if the array includes the number 5
console.log(incTwo); // Logs true if 5 is present, otherwise false