---
layout: default
title: for...of statement
parent: Modern Javascript
nav_order: 5
---

# Looping With for...of Statement

The **for...of statement** iterates over a sequence of values from an iterable object like arrays, strings etc. The iteration happens _one by one_ in a sequential order.

The syntax for the **for...of statement** is

```javascript
for (variable of iterable) statement;
```

`variable` Receives a value from the sequence on each iteration. Can be `const`, `let` or `var` but `const` assignments cannot be modified inside the body of the loop.

`iterable` Is an iterable object. The source of the sequence of values on which the loop operates.

`statement` A statement to be executed on every iteration. Can be a block of statements too.

```javascript
const arr = [10, 20, 30];
for (const item of arr) {
  console.log(arr);
}

// 10
// 20
// 30
```

In this loop we do not have to specify the checking conditions or the increment/decrement conditions.

It works only with iterables but supports `break` and `continue` statements.

For example

```javascript
const arr = [1, 2, 3, 4, 5, 6, 0, 9, 10, 11, 12];
for (const item of arr) {
  if (item === 0) {
    break;
  }
  if (item % 2 !== 0) {
    continue;
  }
  console.log(item);
}

// 2
// 4
// 6
```

Since the for...of statement operates directly on the contents of the iterable, it is not possible to directly index into the iterable. It is however possible with the `Array.entries()` method.

The `Array.entries()` returns an iterator that can be accessed using the variable of the loop (in the above example `item` )

The `Array.entries()` method returns an iterator for every item of the array which itself is an array consisting of two elements - the index of the item in the original array and the item itself.

```javascript
const words = ["hello", "world", "welcome"];
for (const item of words.entries()) {
  console.log(item);
}

// [0, 'hello']
// [1, 'world']
// [2, 'welcome']

const buffer = ["Italian", "Pizzeria", "Vegetarian", "Organic"];
for (const [i, val] of buffer.entries()) {
  console.log(`element at index ${i} is ${val}`);
}

// element at index 0 is Italian
// element at index 1 is Pizzeria
// element at index 2 is Vegetarian
// element at index 3 is Organic
```

## Closing Notes

- The for...of statement only works with iterables.
- To index into an iterable when using the for...of statement we need to use the `Array.entries()` method

## Further Reference

- [MDN - for...of statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
