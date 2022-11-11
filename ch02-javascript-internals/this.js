"use strict";

const myObject = {
  name: "John Doe",
  age: 30,
  isSeniorCitizen: function () {
    return this.age >= 60;
  },
  getAgeMagic: function () {
    return this.age % 11;
  },
};

const anotherObject = {
  age: 30,
  getAgeMagic: function () {
    return this.age % 7;
  },
};

console.log(myObject.getAgeMagic());
console.log(anotherObject.getAgeMagic());
console.log("\n");

// Inside the global scope this keyword will point to global window object
console.log("inside global_scope");
console.log(this);

console.log("\n");

function foo() {
  console.log("inside foo()");
  console.log(this);
}

// If using strict mode then this keyword for regular function call will be undefined
// If strict mode disabled then this keyword for regular function call will point to the global window object
foo();

console.log("\n");

const obj = {
  key: "value",
  func: function () {
    console.log("inside obj.func()");
    console.log(this);
  },
};
obj.func();

console.log("\n");

const arrowFunc = () => {
  console.log("inside arrow function arrowFunc()");
  console.log(this);
};

// For arrow function this keyword will take the scope of the parent
// In this case parent is the global window object
arrowFunc();

console.log("\n");

const someObj = {
  key: "value",
  arrowFunc: () => {
    console.log("inside someObj.arrowFunc()");
    console.log(this);
  },
};

// In this case this will point to the object calling the arrow function ie. someObj
someObj.arrowFunc();

console.log("\n");

const obj1 = {
  name: "tom",
  birthYear: 1992,
  getAge: function () {
    console.log(this);
    return 2022 - this.birthYear;
  },
  foo: function () {
    console.log(this);
  },
};

const obj2 = {
  name: "harry",
  birthYear: 1995,
};

// Copying a method from one object to another object
// This is called method borrowing
// This is possible because JS treats functions as first-class functions
obj2.getAge = obj1.getAge;

console.log("obj1.getAge()");
console.log(obj1.getAge());

console.log("obj2.getAge()");
console.log(obj2.getAge());

// Copying the method to a regular variable
const f = obj1.foo;

// Output will be undefined in strict mode and global window object in non-strict mode
f();
