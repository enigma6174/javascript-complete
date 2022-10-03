"use strict";

// Function declarations
function foo() {
  console.log("Hello World!");
}
foo();

function addNumbers(x, y, z) {
  return x + y + z;
}
const result1 = addNumbers(10, 20, 30);
console.log(`addNumbers(10, 20, 30) : ${result1}`);

// Function expressions
const sumOfNumbers = function (x, y, z) {
  return x + y + z;
};
const result2 = sumOfNumbers(10, 20, 30);
console.log(`sumOfNumbers(10, 20, 30) : ${result2}`);

// Arrow functions - simple form
const isMultiple = (number, multiplier) => {
  return number % multiplier == 0;
};
console.log(`is 27 multiple of 3? ${isMultiple(27, 3)}`);

// Arrow functions - compressed form
const even = (value) => value % 2 == 0;
const getRandom = () => Math.random() * 100 + 1;

console.log(`is 10 even? ${even(10)}`);
console.log(`a random number? ${getRandom()}`);

const names = ["tom", "dick", "harry", "athos", "porthos", "aramis"];
const numbers = [10, 20, 30, 40, 50, 60, 70];

numbers.push(100, 120, 130);
console.log(`numbers ${numbers}`);

numbers.unshift(0);
console.log(`numbers ${numbers}`);

numbers.unshift(-30, -20, -10);
console.log(`numbers ${numbers}`);

const moreNumbers = new Array(numbers);
console.log(`numbers[] ${numbers} length(numbers) ${numbers.length}`);
console.log(
  `moreNumbers[] ${moreNumbers} length(moreNumbers) ${moreNumbers.length}`
);

const user = {
  username: "johndoe",
  email: "johndoe@email.com",
  location: "UK",
  age: 25,
  isPrime: false,
  itemsPurchased: ["book", "pen", "notebook", "eraser"],
};
console.log(user);
console.log(user.username);
console.log(user.itemsPurchased);
console.log(user.itemsPurchased[1]);

const key = "username";

// This will return undefined
console.log(`user.key ${user.key}`);

// This will return the value for the key 'username'
console.log(`user[key] ${user[key]}`);

const userData = {
  username: "johndoe",
  email: "johndoe@email.com",
  location: "UK",
  age: 25,
  isPrime: false,
  itemsPurchased: ["book", "pen", "notebook", "eraser"],
  itemCount: function () {
    return this.itemsPurchased.length;
  },
  isSeniorCitizen: function (userAge) {
    return userAge >= 60;
  },
};

console.log(userData.itemCount());
console.log(userData.isSeniorCitizen(20));
console.log(userData.isSeniorCitizen(100));

const userModified = {
  username: "johndoe",
  email: "johndoe@email.com",
  location: "UK",
  age: 25,
  isPrime: false,
  itemsPurchased: ["book", "pen", "notebook", "eraser"],
  itemCount: function () {
    this.purchaseCount = this.itemsPurchased.length;
    return this.purchaseCount;
  },
};

console.log(userModified.itemCount());
console.log(userModified.purchaseCount);

userModified.itemsPurchased.push("pencil", "crayons");

// This will return old data
console.log(userModified.purchaseCount);

// This will return current data
console.log(userModified.itemCount());
console.log(userModified.purchaseCount);

console.log("\n");
console.log("LOOPS");

for (let i = 0; i < 10; i++) {
  console.log(`iteration: ${i + 1}`);
}

console.log("\nPrinting even numbers from 0-10");
for (let i = 0; i < 10; i++) {
  console.log(i);
  i += 1;
}

console.log("\nPrinting multiples of 5 from 0-50");
for (let i = 0; i < 50; i += 5) {
  console.log(i);
}
