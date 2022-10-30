---
layout: default
title: Rest Pattern And Parameters
parent: Modern Javascript
nav_order: 3
---

The rest pattern is also similar to spread syntax and is denoted by **...** but it is used to collect multiple elements and condense them into an array. Functionality wise it is the opposite of spread operator.

> The rest pattern is used to pack (or collect) elements into an array whereas the spread syntax is used to unpack elements from an array. From a programming point of view, spread appears on the right hand side of the assignment operator whereas the rest appears on the left hand side.

The rest operator is normally used to assign remaining unpacking values into a single variable as an array.

`const [x, y, ...others] = [10, 20, 30, 40, 50, 60, 70]`

It only collects elements after the last value (skipped or unpacked) and puts them together into a single array.

**Note**

There can only be one rest operator in a statement because JavaScript will not know when to stop after it has started collecting the elements for packing into a single array.

```javascript
const [x, y, ...others] = [10, 20, 30, 40, 50, 60, 60];
// x = 10
// y = 20
// others = [30, 40, 50, 60]

const [a, , b, , , c, , ,...remainder] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a = 1
// b = 3
// c = 6
// remainder = [9, 10]

// These will not work only one rest operator can be present
const [p, q, ...others1, ...others2] = [1, 2, 3, 4, 5, 6];
const [p, q, ...others1, r] = [1, 2, 3, 4, 5, 6];
```

It is important to note that the rest operator works for objects also and condenses unpacked items into a new object.

```javascript
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

const { sat, ...weekdays } = obj.operatingHours;

console.log(sat);
// {open: '12pm', close: '10pm'}

console.log(weekdays);
// {
//     thu: {open: '7am', close: '10pm'} 
//     fri: {open: '7am', close: '11pm'}
// }
```

## Rest Parameters

The **rest parameter** syntax allows a function to accept an indefinite number or arguments as an array.

```javascript
function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(3)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15
console.log(add(10, 20, 30)); // 60
```

A function definition's last parameter can be prefixed with a **...** which will cause all remaining parameters to be placed or *collected* into a single JavaScript array.

**Only the last parameter in a function can be a rest parameter**

```javascript
function getInfo(name, email, ...scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  const avg = total / scores.length;
    
  console.log(`student ${name} can be reached at ${email}`);
  console.log(`average score for ${scores.length} subjects is ${avg}`)
}

// All the integer values passed as arguments get stored inside array
getInfo("Bob Smith", "bsmith@email.com", 90, 80, 100, 75, 85);

// Output
// student Bob Smith can be reached at bsmith@email.com
// average score for 5 subjects is 86
```

The rest parameter syntax can be combined with spread syntax to pass an array of values as arguments. The values first get unpacked when passed (spread syntax) and at the time of use get packed into an array (rest parameter)

```javascript
// Function defined with rest parameters
function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const evenNumbers = [10, 20, 30, 40];
const oddNumbers = [1, 3, 5, 7];

// Calling add() with spread syntax in arguments
const sumOfEven = add(...evenNumbers); // 100
const sumOfOdd = add(...oddNumbers); // 16

// Calling add() with spread syntax - with array concatenation
const sumOfNumbers = add(...[...evenNumbers, ...oddNumbers]); // 116
```

## Closing Notes

- The syntax **...** remains the same for rest and spread but their behaviour gets defined by where they are used and how they are used.

- As a rule of the thumb if they are used inside **function definition** or on the left hand side of the assignment operator then it is the rest syntax we are looking at.

- If they are used inside a **function call** or on the right hand side of assignment operator then it is spread syntax we are looking at.

- The spread syntax can be present any number of times in a **function call** but the rest parameters can only be present once and that also as the last parameter in a **function definition**

- The spread syntax unpacks the elements of an array into individual values which may or may not be assigned to variables but the rest syntax always collects the values into a single array.

## Important Links
You can refer to the below links for more information on the spread
#### [MDN - Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)