// Short circuiting with logical OR
console.log(5 || "hello world"); // 5
console.log(true || "hello world"); // true

// Short circuting with logical AND
console.log(0 && "hello world"); // 0
console.log(false && "hello world"); // false

const expression = function () {
  return "evaluated!";
};

console.log(5 || expression()); // 5
console.log(0 || expression()); // evaluated!
console.log(0 || false || "hello" || expression()); // hello
console.log([] || false || "hello" || expression()); // []
console.log(expression() || "hello" || true); // evaluated!
console.log(0 || "" || false); // false

console.log(0 && expression()); // 0
console.log("hello" && expression()); // evaluated!
console.log(false && 0 && expression()); // false
console.log(undefined && false && 0 && ""); // undefined
console.log("hello" && true && 10 && expression()); // evaluated!
console.log("hello" && true && null && 0 && "hello"); // null

console.clear();

// Nullish coalescing operator
console.log(null ?? "hello"); // hello
console.log(undefined ?? false); // false
console.log(false ?? null); // false
console.log(110 ?? null); // 110
console.log(undefined ?? 0); // 0

// Consider the following user data received from the database
// The first user is properly initialised (all fields present)
// The second user is not initialised properly (whatever reasons)
const userData = [
  {
    username: "johndoe",
    email: "jdoe20@email.com",
    friends: 0,
    bio: "",
  },
  {
    username: "bobsmith",
    email: "bsmith32@email.com",
  },
];

// Function to suggest friends for users with 0 or more friends
function suggestFriends() {
  return 1;
}

// Function to update user bio
function updateBio() {
  return "Default User Bio";
}

const user1 = userData[0];
const user2 = userData[1];

// If the user has 0 or more friends do not update friend count
user1.friends = user1.friends || suggestFriends();
user2.friends = user2.friends || suggestFriends();

// Update the user bio if user bio is not set
user1.bio = user1.bio || updateBio();
user2.bio = user2.bio || updateBio();

console.log(user1);
console.log(user2);

console.log("\n");

const userInfo = [
  {
    username: "johndoe",
    email: "jdoe20@email.com",
    friends: 0,
    bio: "",
  },
  {
    username: "bobsmith",
    email: "bsmith32@email.com",
  },
];

const firstUser = userInfo[0];
const secondUser = userInfo[1];

// Update the user1 data correctly
firstUser.friends = firstUser.friends ?? suggestFriends();
firstUser.bio = firstUser.bio ?? updateBio();

// Update the user2 data correctly
secondUser.friends = secondUser.friends ?? suggestFriends();
secondUser.bio = secondUser.bio ?? updateBio();

console.log(firstUser);
console.log(secondUser);

console.clear();

const book1 = {
  title: "Harry Potter",
  pageCount: 0,
  genre: "",
};

const book2 = {
  title: "Lord Of The Rings",
  author: "J.R.R. Tolkien",
};

// Logical OR assignment
book1.pageCount ||= 10; // book1.pageCount = book1.pageCount || 10

// Logical AND assignment
book1.author &&= "N/A"; // book1.author = book1.author && "N/A"
book2.author &&= "N/A"; // book2.author = book1.author && "N/A"

// Logical nullish assignment
book1.genre ??= "fantasy"; // book1.genre = book1.genre ?? "fantasy"
book2.genre ??= "fantasy"; // book2.genre = book2.genre ?? "fantasy"
book2.pageCount ??= 500; // book2.pageCount = book2.pageCount ?? 500

console.log(book1);
console.log(book2);

console.clear();

const arr = [1, 2, 3, 4, 5, 6, 0, 9, 10, 11, 12];

// for-of loop
for (const item of arr) {
  if (item === 0) {
    break;
  }
  if (item % 2 !== 0) {
    continue;
  }
  console.log(item);
}

const words = ["hello", "world", "welcome"];

// for-of loop with array.entries()
for (const item of words.entries()) {
  console.log(item);
}

const buffer = ["Italian", "Pizzeria", "Vegetarian", "Organic"];
for (const [i, val] of buffer.entries()) {
  console.log(`element at index ${i} is ${val}`);
}

const column = ["name", "age", "email"];
const row = ["john", 45, "jdoe@email.com"];

// Create a const literal with dynamic properties
// Methods need not be created with the keyword function()
const userDataBase = {
  [column[0]]: row[0],
  [column[1]]: row[1],
  [column[2]]: row[2],
  isMarried: false,
  greet() {
    console.log("Hello!");
  },
};

console.log(userDataBase);
userDataBase.greet();

const data = {
  blog: {
    metadata: {
      date: "2022-10-01T13:45:05",
    },
    getUptime() {
      return 15;
    },
  },
};

// This will create error as the properties is not defined
// console.log(data.blog.blogdata.title);

// One way to check is by making sure all the properties being used exist
// As the values are undefined the if conditions will fail
if (data.blog && data.blog.blogdata) {
  console.log(data.blog.blogdata.title);
}

// Using optional chaining
console.log(data?.blog.blogdata?.title); // undefined

// This will create error because the properties before optional chaining are undefined
// console.log(data.metadata.serverInfo?.runtime);

// Use optional chaining on all properties that are optional in nature
console.log(data?.metadata?.serverInfo?.runtime); // undefined

// Optional chaining on functions with nullish coalescing operator
console.log(data?.metadata?.getServerStatus?.() ?? "no info available");
console.log(data?.blog?.getUptime?.() ?? 0);

const workingDays = {
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

// Using the Object.keys() method to loop over the object literal
console.log("\nObject.keys()\n");
for (const key of Object.keys(workingDays)) {
  console.log(key);
  console.log(workingDays[key]);
}

// Using the Object.values() method to loop over the object literal
console.log("\nObject.values()");
for (const value of Object.values(workingDays)) {
  console.log(value);
}

console.log("\n");

// Using the Object.entries() method
const entries = Object.entries(workingDays);
console.log(entries);

console.log("\n");

// Accessing and destructuring arrays and object literals using Object.entries()
for (const [key, { open: openingHours, close: closingHours }] of entries) {
  console.log(`Opening hours for ${key} are ${openingHours} and closing hours are ${closingHours}`);
}
