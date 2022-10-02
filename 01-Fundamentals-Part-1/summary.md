# Introduction To JavaScript

#### Data Types

#### `number`

JavaScript does not have separate data type to represent **float** and **int** values. Both are represented by the type **number**

#### `undefined`

Value taken by a variable that is not yet defined. So it means an empty variable.  Whenever we define an empty variable the type and value of that will be **undefined**.

#### `null`

Null also represents empty value and a value that is **null** is also of type **null**. However there is a bug in JavaScript due to which `typeof null` returns **object** but due to legacy reasons this bug has never been fixed.

**NOTE**

The difference between **null** and **undefined** is that `null` is set by the programmer on their own choice but `undefined` is set by JavaScript (or server etc.) during runtime.



#### Variables

`var` was the old way of creating variables in JavaScript. `let` and `const` were introduced in ES6 (modern JS). Values assigned to `let` can be changed but values assigned to `const` cannot be changed, *i.e.* `const` is **immutable** whereas `let` is **mutable**. Hence empty `const` declarations like `const age` is not allowed.

It is a good programming practice to use `const` by default and **only** use `let` when we know the value will change. Avoid using `var` as it is legacy JS feature. 



#### Operators

`x++` will increment x after evaluating the expression so latest value of `x` will not be used in the expression. `++x` will first increment `x` and then evaluate the expression therefore latest value of `x` will be used in the expression.

The same logic applies for decrement operators as `--x` and `x--` 



#### Type Conversion And Coercion

When we explicitly convert one data type to another it is called **type conversion** and when JavaScript automatically converts one type to another it is called **Coercion**

**Type Coercion** happens whenever an operator is dealing with two values of different types. In that case JavaScript will automatically convert  the type of one of the values to match the other so that the operation can be executed.

For exampe `1234 + "10"` will result in `123410`  (**coercion**) but `1234 + Number("10")` will result in `1244` (**type conversion**). 

**Examples**

```javascript
"23" - "10" - 3 // output is 10
"22" / 2 // output is 11
"5" * "4" // output is 20

let n = "1" + 1
n = n - 1
console.log(n) // output is 10


2 + 3 + 4 + "5" // output is 95
```



#### Truthy And Falsy Values

**Falsy** values are those which are not `false` by default but get converted to `false` when we try to convert them to **Boolean** type. 

In JavaScript there are **5** default **falsy** values and they are **0 ,' ', undefined, null, NaN**. These will get converted into false when we try to use them as boolean. All other values in JavaScript are **truthy** values i.e. they get converted to `true` when we try to use them as **Boolean**.

**Note**

In most cases, truthy and falsy values conversion happens implicitly (i.e by coercion) during logical operators or as a part of conditional logic. 

```javascript
const money = 0;

// If-block gets executed
if (money) {
    console.log("you are broke!")
}
else {
    console.log("you are rich!")
}
```



#### Equality Operators `==` and `===`

`===` is called the **strict equality operator** i.e. it does not perform type coercion and returns true if both values are same **and of the same type**. 

`==` is called **lose equality operator** i.e. it performs type coercion when comparing the two values

```javascript
'18' == 18 // true
'18' === 18 // false
'18' === '18' // true
```



#### Statements And Expressions

An **expression** is a piece of code that evaluates to a value (i.e. it produces a value). A **statement** on the other hand is a piece of code that does not produce a value. 

For example `45 + 12` is an expression but `const t = "hello"` is a statement. Note that the string `"hello"` in itself is an expression though!



The distinction between statement and expression is important to know because JavaScript only accepts expressions inside **template strings**



# 
