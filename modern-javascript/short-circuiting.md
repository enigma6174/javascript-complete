---
layout: default
title: Short Circuiting
parent: Modern Javascript
nav_order: 3
---

# Short Circuting In JavaScript

In JavaScript **short circuiting** is the evaluation of an expression from left to right with `||` or `&&` operators. The expression is evaluated using the following rule:

`(some_truthy_expression) <operator> expression`

Short circuit means `expression` will get evaluated conditionally based on the nature of `<operator>`

```javascript
// Short circuiting with logical OR
console.log(5 || "hello world"); // 5
console.log(true || "hello world"); // true

// Short circuting with logical AND
console.log(0 && "hello world"); // 0
console.log(false && "hello world"); // false
```

The `||` operator short circuits whenever the expression on the left hand side is **truthy** and returns that truthy value. If the expression on the left evaluates to `false` only then the right hand expression is evaluated.

When there are multiple expressions chained together then the first truthy expression is returned. If all expressions are falsy then the last one is returned.

```javascript
const expression = function () {
  return "evaluated!";
};

console.log(5 || expression()); // 5
console.log(0 || expression()); // evaluated!
console.log(0 || false || "hello" || expression()); // hello
console.log([] || false || "hello" || expression()); // []
console.log(expression() || "hello" || true); // evaluated!
console.log(0 || "" || false); // false
```

The `&&` operator short circuits whenever the expression on the left hand side is **falsy** and returns that falsy value. If the expression on the left hand side evaluates to `true` only then the right hand expression is evaluated.

When there are multiple expressions chained together then the first falsy expression is returned. If all expressions are truthy then the last one is returned.

```javascript
const expression = function () {
  return "evaluated!";
};

console.log(0 && expression()); // 0
console.log("hello" && expression()); // evaluated!
console.log(false && 0 && expression()); // false
console.log(undefined && false && 0 && ""); // undefined
console.log("hello" && true && 10 && expression()); // evaluated!
console.log("hello" && true && null && 0 && "hello"); // null
```

## Closing Notes

- The logical OR operator will return the first truthy value of all the operands or simply the last value if all of them are falsy.
- The logical AND operator will return the first falsy value of all the operands or the last value if all of them are truthy.
- The OR operator is generally used to set default values of variables whereas the AND operator is generally used to conditionally execute code (the condition being the first operand)
- Empty strings, null and undefined values are all falsy values but empty arrays or empty object literals are truthy values.

## Further Reference

- [MDN - Logical OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [MDN - Logical AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
