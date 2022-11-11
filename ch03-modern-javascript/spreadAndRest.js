"use strict";
console.clear();

const words = ["welcome", "to", "javascript", "programming"];
const numbers = [100, 200, 300, 400, 500, 600];

// Printing with spread
console.log(words);
console.log(...words);

// Create a new array from existing array using spread operator
const moreNumbers = [0.1, 0.2, 0.3, ...numbers, -10, -20];
console.log(moreNumbers);

console.log("\n");

// Creating a shallow copy of an array
// Changes to one array will reflect in another array
const numbersCopy = numbers;

console.log("initial state...");

console.log(`numbers\n${numbers}`);
console.log(`numbersCopy\n${numbersCopy}`);

console.log("\n");

numbers.push(-9, -99);
numbersCopy.push(10001, 90099);
numbers.pop();

console.log("pushed -9 and -99 to numbers[]");
console.log("pushed 10001 and 90099 to numbersCopy[]");
console.log("popped from numbers[] x1");

console.log("\n");

console.log(`numbers\n${numbers}`);
console.log(`numbersCopy\n${numbersCopy}`);

console.log("\n");

// Creating a deep copy of an array
// A deep copy means the arrays are stored in different memory locations
// Deep copy of an array can be created using spread operator
const numbersDeepCopy = [...numbers];

console.log("initial state...");

console.log(`numbers\n${numbers}`);
console.log(`numbersDeepCopy\n${numbersDeepCopy}`);

console.log("\n");

numbersDeepCopy.push(0.001, 0.002, 0.003);
numbers.pop();
numbers.pop();

console.log("pushed 0.001, 0.002 and 0.003 to numbersDeepCopy[]");
console.log("popped from numbers[] x2");

console.log("\n");

console.log(`numbers\n${numbers}`);
console.log(`numbersDeepCopy\n${numbersDeepCopy}`);

console.log("\n");

// Spread operator on strings
console.log(..."hello");

console.log("\n");

function addNumbers(x, y, z) {
  return x + y + z;
}

const values = [10, 20, 30];

let result1 = addNumbers(values[0], values[1], values[2]);
let result2 = addNumbers(...values);

console.log(`addNumbers(values[0], values[1], values[2]) ${result1}`);
console.log(`addNumbers(...values) ${result2}`);

console.log("\n");

const num1 = [10, 20, 30, 40];
const num2 = [];

// Create a deep copy without using spread operator
// Iterate over num1 and insert every element into num2
for (let i = 0; i < num1.length; i++) {
  num2.push(num1[i]);
}

// Modify num1 and num2
num1.push(0);
num2.pop();

console.log(`num1\n${num1}`);
console.log(`num2\n${num2}`);

console.log("\n");

const matrix = [
  [1, 2, 3],
  [0.1, 0.2, 0.3],
  [10, 20, 30],
];
const newMatrix = [...matrix];

console.log(...matrix);
console.log(...newMatrix);

matrix.push([-1, -2, -3]);
newMatrix.push([-10, -20, -30]);

console.log(...matrix);
console.log(...newMatrix);

matrix[0].push(0);
newMatrix[1].push(-99);

console.log(...matrix);
console.log(...newMatrix);

const obj1 = { key1: "value1", key2: "value2" };
const obj2 = { foo: 100, fun: 200 };

const copiedObj = { ...obj1 };
const mergedObj = { ...obj1, ...obj2 };

console.log(copiedObj);
console.log(mergedObj);

console.clear();

// The rest syntax is always present on the left hand side of assignment operator
const [a, , b, , , c, , , ...remainder] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(a);
console.log(b);
console.log(c);
console.log(remainder);

const obj = {
  foo: "bar",
  hello: "world",
  operatingHours: {
    thu: {
      open: "7am",
      close: "10pm",
    },
    fri: {
      open: "7am",
      close: "11pm",
    },
    sat: {
      open: "12pm",
      close: "10pm",
    },
  },
};

// Rest syntax on object literals
const { sat, ...weekdays } = obj.operatingHours;

console.log(sat);
console.log(weekdays);

function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(add(3));
console.log(add(1, 2, 3, 4, 5));
console.log(add(10, 20, 30));

const evenNumbers = [10, 20, 30, 40];
const oddNumbers = [1, 3, 5, 7];

const sumOfEven = add(...evenNumbers);
const sumOfOdd = add(...oddNumbers);
const sumOfNumbers = add(...[...evenNumbers, ...oddNumbers]);

console.log(`sum of even ${sumOfEven}`);
console.log(`sum of odd ${sumOfOdd}`);
console.log(`sum of numbers ${sumOfNumbers}`);

// Rest parameters in function
// Only the last parameter can be a rest parameter
function getInfo(name, email, ...scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  const avg = total / scores.length;

  console.log(`student ${name} can be reached at ${email}`);
  console.log(`average score for ${scores.length} subjects is ${avg}`);
}

// All the integer values passed as arguments get stored inside a single array
getInfo("Bob Smith", "bsmith@email.com", 90, 80, 100, 75, 85);
