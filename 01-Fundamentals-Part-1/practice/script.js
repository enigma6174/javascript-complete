console.log("Hello World!");

let firstName = "John";
let lastName = "Doe";
let ageOfPerson = 23;

console.log("\ninitial_data ->");
console.log(firstName + " " + lastName + " is " + ageOfPerson + " years old");

firstName = "Harry";
lastName = "Smith";

console.log("\nafter_update ->");
console.log(firstName + " " + lastName + " is " + ageOfPerson + " years old");

let flag = true;

console.log("\nlogged_in?");
console.log(flag);

let interestRate = 14.55;
console.log("\ninterest_rate");
console.log(interestRate);

console.log("\nTYPEOF OPERATOR");
console.log(true, typeof true);
console.log("hello", typeof "hello");
console.log(14.9088, typeof 14.9088);
console.log(809, typeof 809);

let x = 100;

console.log("\nINCREMENT OPERATORS");
console.log("x++ will be 100", x++);
console.log("x++ will be 101", x++);
console.log("x will be 102", x);

x = 100;

console.log("\nRESET x");
console.log("++x will be 101", ++x);
console.log("++x will be 102", ++x);
console.log("x will be 102", 102);

let a, b;
a = b = 25 - 10 - 5; // Result is 10
console.log("\noperator precedence ->");
console.log("a = b = 25 - 10 - 5 (a, b):", a, b);

// Switch-case examle in JavaScript
const day = "friday";

switch (day) {
  case "monday":
    console.log("lots of work!");
    break;
  case "tuesday":
    console.log("boring day!");
    break;
  case "wednesday":
    console.log("meetings! lots of meetings!");
    break;
  case "thursday":
    console.log("last day of active work!");
    break;
  case "friday":
    console.log("chill day at work!");
  case "saturday":
  case "sunday":
    console.log("weekend");
    console.log("drink!!");
    break;
  default:
    console.log("excuse me?");
}
