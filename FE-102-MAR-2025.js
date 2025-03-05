// session-1-learnings

// Date functions are built-in functions in programming languages that allow you to work with dates and times. 
// They help in performing operations like getting the current date, formatting dates, adding or subtracting days, and comparing dates.

new Date() → Creates a new date object
Date.now() → Returns the current timestamp (milliseconds)
toDateString() → Converts a date to a readable format
getFullYear() → Returns the year

An object is a collection of related data (properties/attributes) and functions (methods/behaviors) that work together. 
Objects are a key concept in object-oriented programming (OOP) and help structure code in a more modular and reusable way.

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    start: function() {
    console.log("Car is starting...");
    }
};

// Accessing properties
console.log(car.brand);  // Output: Toyota

// Calling methods
car.start();  // Output: Car is starting...

// operations on array
1.looping through an array
2.push operations
3.pull operations
4.shift and unshift operations

// so in the first session they again went through the fundamentals of javascript

// second session
Arrow Functions (=>)

Arrow functions provide a shorter syntax for writing functions in JavaScript. 
They automatically bind this and are useful for concise function expressions.

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

forEach()
The forEach() method executes a function for each element in an array but does not return a new array.

const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); 
// Output: 2, 4, 6

filter()
The filter() method creates a new array with elements that pass a given test (returns true).

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

