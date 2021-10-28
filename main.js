// Assignment: 1
// Define a repeatify function on the String object.
// The function accepts an integer that specifies how many times the string has to be repeated.
// The function returns the string repeated the number of times specified.
// For example:

// console.log('hello'.repeatify(3));

// Should print hellohellohello

// Solution:
String.prototype.repeatify = function (count) {
  let repeatedString = "";

  for (let num = 0; num < count; num++) {
    repeatedString += this;
  }
  return repeatedString;
};

console.log("hello".repeatify(3));

////////////////

// Assignment: 3
// Write a function after that takes the number of times the callback needs to be called
// before being executed as the first parameter and the callback as the second parameter

// function after(count, func) {
// Implement the 'after' function
// }

// var called = function () {
//   console.log("hello");
// };

// var afterCalled = after(3, called);

// afterCalled(); //-> nothing is printed
// afterCalled(); //-> nothing is printed
// afterCalled(); //-> 'hello' is printed

// Solution:
const after = (count) => (func) => {
  let counter = 0;

  const runAfter = () => {
    counter++;
    if (count === counter) func();
  };
  return runAfter;
};

const afterCalled = after(3)(() => console.log("hi"));

afterCalled(); //-> nothing is printed
afterCalled(); //-> nothing is printed
afterCalled(); //-> 'hi' is printed

////////////

// Assignment: 4
// Write a function multiply() that multiples 2 numbers:

// function multiply(num1, num2) {
//   // Write your code here...
// }
// If multiply(num1, numb2) is invoked with 2 arguments, it should return the multiplication of the 2 arguments.
// But if invoked with 1 argument const anotherFunc = multiply(num1), the function should return another function.
// The returned function when called anotherFunc(num2) performs the multiplication num1 * num2.

// multiply(4, 5); // => 20
// multiply(3, 3); // => 9

// const double = multiply(2);

// double(5);  // => 10
// double(11); // => 22

// Solution:

const multiply = (num1, num2) => {
  if (num2 !== undefined) return num1 * num2;

  return function multiplyAgain(num2) {
    return num1 * num2;
  };
};

multiply(4, 5); // => 20
multiply(3, 3); // => 9

const double = multiply(2);

double(5); // => 10
double(11); // => 22
