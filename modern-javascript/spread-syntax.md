---
layout: default
title: Spread Syntax
parent: Modern Javascript
nav_order: 1
---

# A Deep Dive Into The Spread Syntax

The spread syntax **...** is used to unpack all the items in an array (or an iterable). This feature was introduced in ES6 and is a very handy way of working on iterables.

The syntax for the spread syntax is `...myIterable`

```javascript
const arr = [10, 20, 30, 40];
console.log(...arr);

// Output
// 10, 20, 30, 40
```

It allows an iterable (array, string etc.) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

```javascript
const obj = { key1: "value1" };
const objNew = { ...obj, key2: "value2" };
// objeNew: { key1: "value1", key2: "value2" }
```

The spread syntax should be used when all elements from an object or array need to be included in a new array or object or should be applied one-by-one in a function call's argument list.

The distinct places that accept the spread syntax:

- Function arguments list `foo(arg1, arg2, ...args, argN)`
- Array literals `[10, 20, ...numbers, 0.1, 0.2]`
- Object literals `{...obj, key: "value"}`

Only iterables like arrays can be spread in array and function parameters. Object literals are not iterable therefore using the spread syntax on object literals enumerates it's own properties.

```javascript
const obj = { key: "value" };
const arr = [1, 2, 3];

const res1 = [...obj];
// This will give error
// Objects are not iterable

const res2 = [...arr];
// This will work
// Arrays are iterable
```

For arrays, all indices are enumerable own properties so they can be spread into objects.

```javascript
const array = ["hello", "world", "javascript"];
const obj = { ...array };

// Output
// { 0: "hello", 1: "world", 2: "javascript" }
```

## Creating Arrays Using Spread Syntax

The spread syntax is very handy for creating new arrays - either by copying the contents of other arrays or by concatenating two or more arrays together.

The spread syntax is used to create a **deep copy** of an array. A **deep copy** means the copied array is stored in a new memory location and any changes to the original array will not reflect in the new array.

Consider the example

```javascript
const num1 = [10, 20, 30];

// Create a deep copy of num1
const num2 = [...num1];

// Changes to one array will not reflect in the other
num1.push(0);
num2.pop();

console.log(...num1);
console.log(...num2);

// Output
// 10, 20, 30, 0
// 10, 20
```

An alternative to creating a deep copy without using the spread syntax is by creating an empty new array and then looping over the array to be copied and individually inserting each element into the new array.

Consider the example

```javascript
const num1 = [10, 20, 30, 40];
const num2 = [];

// Iterate over num1 and insert every element into num2
for (let i = 0; i < num1.length; i++) {
  num2.push(num1[i]);
}

console.log(num1);
console.log(num2);

// Output
// [10, 20, 30, 40]
// [10, 20, 30, 40]

// Modify num1 and num2
num1.push(0);
num2.pop();

console.log(num1);
console.log(num2);

// Output
// [10, 20, 30, 40, 0]
// [10, 20, 30]
```

A **shallow copy** on the other hand creates a copy of an array but the copied array references the same memory location as the original array. Therefore, whenever the original array is modified, changes are reflected in the copied array too and vice versa.

```javascript
const num1 = [10, 20, 30];

// Create a shallow copy of num1
const num2 = num1;

// Changes to one array will not reflect in the other
num1.push(0);
num2.push(23);

console.log(...num1);
console.log(...num2);

// Output
// 10, 20, 30, 0, 23
// 10, 20, 30, 0, 23
```

**Note**

The spread syntax only goes **one level deep** when it is making copies of an array which means that nested arrays when getting copied using spread syntax are shallow copies.

Therefore it may be unsuitable for copying multi-dimensional arrays. No native operation in JavaScript does a deep clone.

> When we copy the nested arrays both the copied and the new array refer to the same memory location for the nested sub arrays.

Consider the example

```javascript
const matrix = [
  [1, 2, 3],
  [0.1, 0.2, 0.3],
  [10, 20, 30],
];
const newMatrix = [...matrix];

console.log(matrix);
console.log(newMatrix);

// Output
// [ [1, 2, 3], [0.1, 0.2, 0.3], [10, 20, 30] ]
// [ [1, 2, 3], [0.1, 0.2, 0.3], [10, 20, 30] ]

// Both matrix and newMatrix are at new memory locations
// At the top level both these arrays are unique
matrix.push([-1, -2, -3]);
newMatrix.push([-10, -20, -30]);

console.log(matrix);
console.log(newMatrix);

// Output
// [ [1, 2, 3], [0.1, 0.2, 0.3], [10, 20, 30], [-1, -2, -3] ]
// [ [1, 2, 3], [0.1, 0.2, 0.3], [10, 20, 30], [-10, -20, -30] ]

// The contents of matrix and newMatrix are arrays too
// These arrays are not deep copied
// Both matrix and newMatrix refer to the same locations
// matrix[i] and newMatrix[i] refer to same memory address
// Changes to one will reflect in the other
matrix[0].push(0);
newMatrix[1].push(-99);

console.log(matrix);
console.log(newMatrix);

// Output (matrix)
// [
//     [1, 2, 3, 0],
//     [0.1, 0.2, 0.3, -99],
//     [10, 20, 30],
//     [-1, -2, -3]
// ]

// Output (newMatrix)
// [
//     [1, 2, 3, 0],
//     [0.1, 0.2, 0.3, -99],
//     [10, 20, 30],
//     [-10, -20, -30]
// ]
```

## Concatenating Arrays

The spread syntax can be used to join two or more arrays together into a single array. We can also add individual items to the array during this process.

```javascript
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const squares = [4, 16, 36, 64, 100];

// Join the arrays together into a single array
// The order in which the arrays are spread matters
const numbers = [0, ...evenNumbers, ..squares, ...oddNumbers, 0.1];

console.log(...numbers);

// Output
// 0, 2, 4, 6, 8, 10, 4, 16, 36, 64, 100, 1, 3, 5, 7, 9, 0.1
```

The spread syntax can be used as many times as required to create a new array. There is no restriction on the number of times it can be used. However the order in which the spread syntax is used determines the order in which the unpacked elements appear in the new array.

```javascript
const cities = ["london", "delhi", "tokyo"];
const countries = ["england", "india", "japan"];

const data1 = [...countries, ...cities];
// Output
// ["england", "india", "japan", "london", "delhi", "tokyo"]

const data2 = [...cities, ...countries];
// Output
// [london", "delhi", "tokyo", england", "india", "japan"]
```

## Spread On Object Literals

The spread syntax is used for shallow copying of object literals. It can also be used to merge multiple object literals into a new object.

This is also a shorter syntax than `Object.assign()`

```javascript
const obj1 = { key1: "value1", key2: "value2" };
const obj2 = { foo: 100, fun: 200 };

const copiedObj = { ...obj1 };
// { key1: "value1", key2: "value2" };

const mergedObj = { ...obj1, ...obj2 };
// { key1: "value1", key2: "value2", foo: 100, fun: 200 };
```

## Spread On Functions

The spread syntax is best used in places where the expected data is values separated by comma. This makes it very useful to pass multiple arguments into a function call without specifying the variables individually.

It is also possible to combine spread syntax with specific variable names when passing them to a function call.

```javascript
function addNumbers(x, y, z) {
  return x + y + z;
}

const values = [10, 20, 30];

const result1 = addNumbers(values[0], values[1], values[2]); // 60
const result2 = addNumbers(...values); // 60

function getInfo(name, subject1, subject2, subject3, grade, email) {
  console.log(`student ${name} has ${grade} grade`);
  console.log("subjects registered:");
  console.log(`${subject1}\n${subject2}\n${subject3}`);
  console.log(`student ${name} can be reached at ${email}`);
}

const subjects = ["physics", "chemistry", "mathematics"];
getInfo("Harry", ...subjects, "B+", "hsmith@email.com");

// Output
// student Harry has B+ grade
// subjects registered:
// physics
// chemistry
// mathematics
// student Harry can be reached at hsmith@email.com
```

## Closing Notes

- Traditionally, the spread syntax could only be used on **iterables** but not on objects as objects are not iterable. However, as of ES 2018 it is possible to use the spread syntax on objects also though it behaves a bit differently.

- An iterable is a data structure in JavaScript that we can iterate over or in simpler terms, loop over.
- Strings, arrays, maps etc. are some of the most common iterables in JS and all of these can be used with spread syntax.
- Since a **string** is also an iterable we can use it with the spread syntax as `console.log(..."hello")`

- An important distinction between spread syntax and de-structuring is that de-structuring creates new variables whereas spread syntax does not.

- Spread syntax is useful in places only where we need values separated by commas.
- Creating a new array from existing array or passing an array of arguments to a function are the best use cases.
- Passing spread syntax for example to a variable `const t = ..."hello"` or to a template string inside the `${..."hello"}` will result in errors.

## Important Links

- [MDN - Spread Syntax ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
