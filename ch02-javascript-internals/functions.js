"use strict";

const myObj = {
  key: "value",
  number: 100,
  foo: function () {
    console.log("function(){}");
    console.log(`myObj.key is ${this.key} and myObj.number is ${this.number}`);
  },
  fun: () => {
    console.log("\n() => {}");
    console.log(`myObj.key is ${this.key} and myObj.number is ${this.number}`);
  },
};

myObj.foo();
myObj.fun();

console.log("\nInside if(){}");

if (true) {
  const myObj = {
    key: "value",
    number: 100,
    foo: function () {
      console.log("\nfunction(){}");
      console.log(this);
    },
    fun: () => {
      console.log("\n() => {}");
      console.log(this);
    },
  };
  myObj.foo();
  myObj.fun();
}

function g() {
  console.log("\nInside g()");
  console.log(this);

  const myObj = {
    key: "value",
    number: 100,
    foo: function () {
      console.log("\nfunction(){}");
      console.log(this);
    },
    fun: () => {
      console.log("\n() => {}");
      console.log(this);
    },
  };
  myObj.foo();
  myObj.fun();
}
g();

console.clear();

const obj = {
  key: "value",
  number: 235,
  foo: function () {
    console.log("inside foo()");
    console.log(this);

    // Trick to be able to use object properties inside regular function calls
    // This is pre ES-6 solution
    const self = this;

    // Function declaration
    function f() {
      console.log("inside f()");
      console.log(this);
    }

    // Function expression
    const fun = function () {
      console.log("inside fun()");
      console.log(this);
    };

    // Arrow function
    // This is ES-6 solution to allow the function to access member properties
    const afun = () => {
      console.log("inside afun()");
      console.log(this);
    };

    // Will be able to access method properties
    function ff() {
      console.log("inside ff()");
      console.log(self);
      console.log(self.key, self.number);
    }

    // Will be able to access method properties
    const gg = function () {
      console.log("inside gg()");
      console.log(self);
      console.log(self.key, self.number);
    };

    f();
    fun();
    afun();
    ff();
    gg();
  },
};

obj.foo();

console.clear();

function foo(x, y, z) {
  console.log(arguments);
  return x + y + z;
}

const fun = (x, y, z) => {
  // This will give error
  // Arrow function does not have arguemnts
  //   console.log(arguments);
  return x + y + z;
};

const r = foo(1, 2, 3);
const s = fun(10, 20, 30);

console.log(r, s);

console.clear();

const lastObj = {
  key: "value",
  number: 231,
  foo: function () {
    // Function declaration
    function f() {
      console.log(this);
    }
    // Function expression
    const g = function () {
      console.log(this);
    };
    // Arrow function
    const k = () => {
      console.log(this);
    };

    // In the first two calls output will be undefined
    // f() and g() are regular function calls
    // They will get their own this keyword set to undefined
    f();
    g();

    // Will be able to access properties
    // Arrow function does not have own this keyword
    // Will refer to the this keyword of parent that is calling
    // In this case arrow function is called by obj
    k();
  },
};

lastObj.foo();
