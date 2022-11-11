"use strict";

function f() {
  console.log("INSIDE f()");

  const t = "hello world";
  var v = "javascript programming!";

  if (true) {
    console.log("INSIDE if-block");

    const tbar = "NOT(hello world)";
    var vbar = "NOT(javascript programming!)";

    console.log(tbar);
    console.log(vbar);
  }
  console.log(vbar);

  // This will not work
  // let and const are block scoped
  //   console.log(tbar);

  function g() {
    console.log("\nINSIDE g()");

    console.log(t);
    console.log(v);
    console.log(vbar);

    // This will not work
    // let and const are block scoped
    // console.log(tbar);
  }
  g();
}

f();

// This will not work
// var is function scoped
// console.log(vbar);

// This will not work as val is const
// const variables are not hoisted
// console.log(val);

// This will output undefined
// var variables are hoisted
console.log(value);

const val = 0;
var value;

// This will not work as func() is assigned to const
// Varaibles of type const are not hoisted
// console.log(func());

// This will also not work despite being hoisted because funk is undefined
// console.log(funk())

// This will output undefined
console.log(funk);

const func = function () {
  console.log("func()");
  return 7;
};
console.log(func());

console.log("\n");

var funk = function () {
  console.log("funk()");
  return 11;
};
console.log(funk());

const x = "const";
var y = "var";

// Output is undefined
// const variables are not added to global window object
console.log(window.x);

// Output is var
// var variables are added to global window object
console.log(window.y);

// This is a web api
// This is not a part of javascript
// Provided by JS Runtime - web browser
// window.alert("Hello");
