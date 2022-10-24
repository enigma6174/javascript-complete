"use strict";

const arr = [10, 20, 30, 40, 50, 60, 70];
const [x, y, z] = arr;

console.log(x);
console.log(y);
console.log(z);

const myArr = [10, 20];
const [a, b, c] = myArr;

console.log(a);
console.log(b);
console.log(c);

let num1 = 1001;
let num2 = 2005;

console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);

// Switching the values of the variables
const temp = num1;
num1 = num2;
num2 = temp;

console.log(`num1: ${num1}`);
console.log(`num2 : ${num2}`);
console.log("\n");

num1 = 999;
num2 = 111;

console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);

// Switching with de-structuring
[num2, num1] = [num1, num2];

console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);

const someArr = [10, 20, 30, 40, 50];

// Selective destructuring
const [p, , , q] = someArr; // select the values 10, 40
const [, , , , m] = someArr; // select the values 50

console.log(p);
console.log(q);
console.log(m);

const arrArr = [2, 5, 6, ["inner1", "inner2", "inner3"]];
const [i, , , [j1, , j2]] = arrArr;

console.log(`i=${i} j1=${j1} j2=${j2}`);

console.clear();

const newArr = [-10, -20, -30, ...arr];

console.log(...newArr);
console.log(...arr);

const arrCpy = arr;
const newArrCpy = [...arr];

arr.push(1009);
arrCpy.push(555);
newArrCpy.push(-99, -11, 1101);

console.log(arr);
console.log(arrCpy);
console.log(newArrCpy);

function addFiveNumbers(n1, n2, n3, n4, n5) {
  return n1 + n2 + n3 + n4 + n5;
}

const a1 = [10, 20, 30, 40, 50];

const r1 = addFiveNumbers(a1[0], a1[1], a1[2], a1[3], a1[4], a1[5]);
const r2 = addFiveNumbers(...a1);

console.log(r1);
console.log(r2);

console.clear();

// Example of destructuring

const dArr = [10, 20];
console.log(`dArr ${dArr}`);

let [first, second] = dArr;
console.log(`first ${first} second ${second}`);

[second, first] = [first, second];
console.log(`first ${first} second ${second}`);

const da = [10, 20];
console.log(da);

let [f1, f2] = da;
console.log(f1, f2);

[f2, f1] = [f1, f2];
console.log(f1, f2);

// Swapping arrays with destructuring
const positives = [10, 20, 30, 40, 50];
const negatives = [-10, -20, -30, -40, -50];

let [firstArray, secondArray] = [positives, negatives];
console.log(firstArray);
console.log(secondArray);

console.log("swapping firstArray and secondArray ->");

[firstArray, secondArray] = [secondArray, firstArray];
console.log(firstArray);
console.log(secondArray);
