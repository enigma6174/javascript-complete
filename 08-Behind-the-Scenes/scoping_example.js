"use strict";

// EXAMPLE_1

// function f() {
//   console.log("INSIDE f()");
//   console.log(`_t1: ${t1}`);

//   let t2 = "inner1";
//   console.log(`_t2: ${t2}`);

//   function g() {
//     console.log("INSIDE g()");
//     console.log(`_t2: ${t2}`);

//     t2 = "modified_inner1";
//     let t3 = "inner2";

//     console.log(`_t3: ${t3}`);

//     function h() {
//       console.log("INSIDE h()");
//       console.log(`_t3: ${t3}`);
//       console.log(`_t2: ${t2}`);
//       console.log(`_t1: ${t1}`);

//       function k() {
//         console.log("INSIDE k()");
//         console.log(`_t3: ${t3}`);
//         console.log(`_t2: ${t2}`);
//         console.log(`_t1: ${t1}`);

//         t2 = "remodified_inner1";
//       }

//       k();
//       t3 = "modified_inner2";

//       console.log("CALLING k() again");
//       k();

//       t1 = "modified_main";
//     }
//     h();
//   }
//   g();
// }

// let t1 = "main";

// console.log("INSIDE GLOBAL SCOPE");
// console.log(`_t1: ${t1}`);

// f();

// console.log("INSIDE GLOBAL SCOPE");
// console.log(`_t1: ${t1}`);

// EXAMPLE_2

// function f() {
//     console.log(`f() : ${temp}`)

//     function foo() {
//         temp = "inside foo()"
//         console.log(`foo() : ${temp}`)
//     }

//     foo()
//     console.log(`f() : ${temp}`)

// }

// let temp = "inside main_scope"
// console.log(`main_scope : ${temp}`)

// f()
// console.log(`main_scope : ${temp}`)

// OUTPUT
// main_scope : inside main_scope
// f() : inside main_scope
// foo() : inside foo()
// f() : inside foo()
// main_scope : inside foo()

// EXAMPLE_3

// function f() {
//     console.log(`f() : ${temp}`)

//     function foo() {
//         temp = "inside foo()"
//         console.log(`foo() : ${temp}`)
//     }

//     foo()
//     console.log(`f() : ${temp}`)

//     // temp = "_modified_"
// }

// let temp = "inside main_scope"
// console.log(`main_scope : ${temp}`)

// f()
// console.log(`main_scope : ${temp}`)

// OUTPUT
// main_scope : inside main_scope
// f() : inside main_scope
// foo() : inside foo()
// f() : inside foo()
// main_scope : inside foo()

// EXAMPLE_4

// function f() {
//     console.log(`f() : ${temp}`)

//     function foo() {
//         temp = "inside foo()"
//         console.log(`foo() : ${temp}`)
//     }

//     foo()
//     console.log(`f() : ${temp}`)

//     temp = "_modified_"
// }

// let temp = "inside main_scope"
// console.log(`main_scope : ${temp}`)

// f()
// console.log(`main_scope : ${temp}`)

// OUTPUT
// main_scope : inside main_scope
// f() : inside main_scope
// foo() : inside foo()
// f() : inside foo()
// main_scope : _modified_

// EXAMPLE_5

// function f() {
//     let temp = "inside f()";
//     console.log(`f() ${temp}`)

//     function foo() {
//         const temp = "inside foo()"
//         console.log(`foo() ${temp}`)
//     }

//     foo()
//     console.log(`f() ${temp}`)
// }

// f()

// OUTPUT
// f() inside f()
// foo() inside foo()
// f() inside f

// EXAMPLE_6

// function f() {
//     let temp = "inside f()";
//     console.log(`f() ${temp}`)

//     function foo() {
//         console.log(`foo() ${temp}`)

//         const temp = "inside foo()"
//         console.log(`foo() ${temp}`)
//     }

//     foo()
//     console.log(`f() ${temp}`)
// }

// f()

// OUTPUT
// f() inside f()
// /tmp/C4RrFbeVnB.js:6
//        console.log(`foo() ${temp}

// EXAMPLE_7

// function f() {
//     let temp = "inside f()";
//     console.log(`f() ${temp}`)

//     function foo() {
//         console.log(`foo() ${temp}`)

//         temp = "inside foo()"
//         console.log(`foo() ${temp}`)
//     }

//     foo()
//     console.log(`f() ${temp}`)
// }

// f()

// OUTPUT
// f() inside f()
// foo() inside f()
// foo() inside foo()
// f() inside foo()

// EXAMPLE_8

// function f() {
//     console.log(`f() _t1: ${t1}`)

//     const t2 = "inner1"
//     console.log(`f() _t2: ${t2}`)

//     function g() {
//         console.log(`g() _t2: ${t2}`)

//         const t3 = "inner2"
//         console.log(`g() _t3: ${t3}`)

//         function h() {
//             console.log(`h() _t3: ${t3}`)
//             console.log(`h() _t2: ${t2}`)
//             console.log(`h() _t1: ${t1}`)
//         }
//         h()
//     }
//     g()
// }

// const t1 = "main"
// f()

// OUTPUT
// f() _t1: main
// f() _t2: inner1
// g() _t2: inner1
// g() _t3: inner2
// h() _t3: inner2
// h() _t2: inner1
// h() _t1: main
