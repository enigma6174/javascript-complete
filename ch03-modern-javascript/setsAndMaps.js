"use strict";

function foo(set) {
  console.log("\n");
  for (const item of set) {
    console.log(item);
  }
  console.log(`size ${set.size}`);
}

// Sets have to be created from iterables
// Sets only have unique numbers
const set = new Set([10, 20, 30, 40, 20, 30, 10, 10, 20, 0, -10, 40]);
console.log(set);
console.log(set.size); // Number of items in the set

// Looping over the set
console.log("looping over the set ->");
for (const number of set) {
  console.log(number);
}

// Check for the presence of elements in the set
console.log(set.has(10));
console.log(set.has(0));
console.log(set.has(1000));

// Add items to the set
set.add(99);
set.add(121);
set.add(1331);

foo(set);

// Delete items from the set
set.delete(10);
set.delete(0);
set.delete(1);
set.delete(6000);

foo(set);

// Values cannot be accessed from a set using indexing
console.log("set[0]");
console.log(set[0]);

console.log("\nConverting Set -> Array");

// Set is for storage and lookup - convert to array when retrieval is required
const array = new Array(...set);
console.log(array);
console.log(array[0]);

// console.clear();

// Creating a map
const map = new Map();

// Insert values
map.set("hello", "world");
map.set(20, "twenty");
map.set(3.14, "pi");

console.log(map);

// Insert values by chaining
// Map allows all types of objects to be inserted as values
map
  .set([10, 20, 30], "array")
  .set("array", [50, 30, 40, "hello", "world"])
  .set(false, "sold out")
  .set(true, "available")
  .set("tickets", 35)
  .set({ key1: "value1", key2: "value2" }, { obj: "result" });

console.log(map);

// Fetch values for the keys
console.log("\nmap.get('array')");
console.log(map.get("array"));

console.log("\nmap.get(20)");
console.log(map.get(20));

console.log("\nmap.get([10, 20, 30, 40])");
console.log(map.get([10, 20, 30, 40]));

console.log("\nmap.get([10, 20, 30, 40, 50])");
console.log(map.get([10, 20, 30, 40, 50]));

console.log("\nmap.get(true)");
console.log(map.get(true));

const obj = {
  key1: "value1",
  key2: "value2",
};

console.log("\nmap.get(obj)");
console.log(map.get(obj));

// Update map value
map.set("tickets", 20);
console.log(map);

function ticketCheck(status, map, ticketCount) {
  console.log(status);
  if (ticketCount <= map.get("tickets")) {
    map.set("tickets", map.get("tickets") - ticketCount);
  }
}

// Perform conditional operations to fetch data
let ticketsWanted = 10;
let ticketsAvailable = map.get(ticketsWanted <= map.get("tickets"));

ticketCheck(ticketsAvailable, map, ticketsWanted);

ticketsWanted = 8;
ticketsAvailable = map.get(ticketsWanted <= map.get("tickets"));

ticketCheck(ticketsAvailable, map, ticketsWanted);

ticketsWanted = 6;
ticketsAvailable = map.get(ticketsWanted <= map.get("tickets"));

ticketCheck(ticketsAvailable, map, ticketsWanted);

// Check for the presence of keys in a map
console.log(`tickets? ${map.has("tickets")}`);
console.log(`false? ${map.has(false)}`);
console.log(`11? ${map.has(11)}`);

// Delete items from the map
map.delete("tickets");
map.delete("3.14");
map.delete(true);
map.delete(false);

console.log(map);
console.log(map.size);

// Clearing the set and the map
map.clear();
set.clear();

console.log(map);
console.log(set);

// Correct way to use reference types as keys in maps
const arr = [10, 20, 30, 40];
const obx = {
  key: "value",
  hello: "world",
};

map.set(arr, "array").set(obx, "object");

console.log(map);
console.log(map.get(arr));
console.log(map.get(obx));

map.clear();
set.clear();

console.clear();

// Creating a map from array of arrays
const questionBank = new Map([
  ["question", "Which is the best football club in the world?"],
  [1, "Real Madrid"],
  [2, "Manchester United"],
  [3, "Barcelona"],
  [4, "Bayern Munich"],
  [5, "AC Milan"],
  [6, "Juventus"],
  [7, "Liverpool"],
  ["answer", 2],
  [true, "CORRECT!!!!"],
  [false, "WRONG! TRY AGAIN!!"],
]);

console.log(questionBank);

const bigObject = {
  key: "value",
  hello: "world",
  array: [10, 20, 30],
  monday: {
    open: 8,
    close: 22,
  },
  tuesday: {
    open: 10,
    close: 23,
  },
  wednesday: {
    open: 9,
    close: 21,
  },
  thursday: {
    open: 10,
    close: 21,
  },
  friday: {
    open: 7,
    close: 23,
  },
};
console.log(bigObject);
console.log(Object.entries(bigObject));

// Create a map from the object directly
const objectMap = new Map(Object.entries(bigObject));
console.log(objectMap);

console.log(questionBank.get("question"));
console.log(questionBank.get(questionBank.get("answer")).toLowerCase());

// alert("HELLO!");

// const answer = prompt(questionBank.get("question"));
// if (answer.toLowerCase() === questionBank.get(questionBank.get("answer")).toLowerCase()) {
//   alert(questionBank.get(true));
// } else {
//   alert(questionBank.get(false));
// }

// Convert map to array
const mapArray = new Array(...questionBank);
console.log(mapArray);
