"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  address: "Via Angelo Tavanti 23, Firenze, Italy",
  cuisine: "European",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { name, openingHours, categories, address } = restaurant;
const { helloWorld } = restaurant;

console.log(name);
console.log(address);
console.log(categories);
console.log(openingHours);
console.log(helloWorld);

// Destructuring with variable names
const { name: restaurantName, mainMenu: menu } = restaurant;
console.log(restaurantName);
console.log(menu);

// Nested destructuring
const { thu } = openingHours;
const {
  fri: { open, close },
} = openingHours;

console.log(thu);
console.log(open);
console.log(close);

const myObj = {
  hello: function ({ key3 = "Default", key1, key4 = "default", key2 }) {
    console.log(key1);
    console.log(key2);
    console.log(key3);
    console.log(key4);
  },
};

myObj.hello({ key1: "value1", key2: "value2", key4: "value4" });

console.clear();

const [x1, x2, , , ...others] = [10, 20, 30, 40, 50, 60, 70, 80];

console.log(x1);
console.log(x2);
console.log(others);

const { sat: saturday, ...weekdays } = restaurant.openingHours;

console.log(saturday);
console.log(weekdays);

function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(add(10, 20, 30, 40, 50));
console.log(add(1, 2));
console.log(add(...[1, 2, 3, 4, 5]));

let buffer = restaurant.categories;
for (const item of buffer.entries()) {
  console.log(item);
}

for (const [i, val] of buffer.entries()) {
  console.log(`element at index ${i} is ${val}`);
}

// Old way
const john = {
  name: "John Doe",
  email: "johndoe@email.com",
  age: 45,
  isSeniorCitizen: function () {
    return this.age >= 60;
  },
};
console.log(john.isSeniorCitizen());

// New way
const jane = {
  name: "Jane Doe",
  email: "janedoe@email.com",
  age: 32,
  isSeniorCitizen() {
    return this.age >= 60;
  },
};
console.log(jane.isSeniorCitizen());

const column = ["name", "age", "email", "location", "isMarried"];
const row = ["john", 45, "jdoe@email.com", "New York"];

const userData = {
  [column[0]]: row[0],
  [column[1]]: row[1],
  [column[2]]: row[2],
  [column[3]]: row[3],
  [column[4]]: false,
};
console.log(userData);
