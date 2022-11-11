"use strict";
console.clear();

const restaurant = {
  name: "Clasico Italiano",
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

  getInfo: function ({ name, location, cuisine }) {
    console.log(
      `restaurant ${name} located in ${location} serves ${cuisine} food.`
    );
  },
  getMenu: function () {
    console.log(`Starters for today ${this.starterMenu}`);
    console.log(`Main course for today ${this.mainMenu}`);
  },
};

// Simple object destructuring
const { name, address, cuisine } = restaurant;

console.log(`name ${name}`);
console.log(`address ${address}`);
console.log(`cuisine ${cuisine}`);

// Object destructuring with names
const { name: restaurantName, address: restaurantLocation } = restaurant;

console.log(`restaurantName ${restaurantName}`);
console.log(`restaurantLocation ${restaurantLocation}`);

// Object destructuring with default values and assigned names
const {
  cuisine: restaurantCuisine = "Chinese",
  mainMenu: restaurantMenu = ["Bread"],
  isOpen = false,
} = restaurant;

console.log(`restaurantCuisine ${restaurantCuisine}`);
console.log(`restaurantMenu ${restaurantMenu}`);
console.log(`isOpen ${isOpen}`);

console.log("\n");

// Mutating variables
let a = 10;
let b = 20;
const obj = { a: -10, b: -20 };

// One way to destructure obj
// The values of a and b are preserved
const { a: a1, b: b1 } = obj;

console.log(`a=${a} b=${b}`);
console.log(`a=${a1} b=${b1}`);

// Another way to destructure obj
// This will overwrite the values of a and b
// ({a, b} = obj)
// console.log(a, b)

// Cannot destructure the object as below because a and b already defined
// const {a, b} = obj
// let {a, b} = obj
// {a, b} = obj

const { openingHours } = restaurant;

// Destructuring nested objects
const { thu } = openingHours;
const {
  fri: { open, close },
} = openingHours;

console.log("thursday");
console.log(thu);

console.log("friday");
console.log(open, close);

// This will not work
// console.log(fri)

// Destructuring functions in objects
const { getInfo } = restaurant;
getInfo({ name: "AB Plaza", cuisine: "Italian", location: "NY" });

// Because of how 'this' keyword works the following will not work
// It will return 'undefined'
// const { getMenu } = restaurant;
// getMenu();

// Because of how 'this' keyword works the following will not work
// It will return 'undefined'
// const { getMenu: menuToday } = restaurant;
// menuToday();

// This will give the correct result
restaurant.getMenu();
