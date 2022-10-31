---
layout: default
title: Modern Operators
parent: Modern Javascript
nav_order: 4
---

# Modern JavaScript Operators

These are a collection of modern day operators that were introduced in ES 2020 onwards and can be used to solve a wide variety of problems.

## Nullish Coalescing Operator

The nullish coalescing operator is a logical operator denoted by `??` was introduced in ES 2020. It works like the `||` operator but instead of checking for truthy or falsy values this operator checks for **nullish** values `null` or `undefined`.

It returns the right hand side operand when the left hand side operand is `null` or `undefined`, otherwise it returns the left hand side side operand.

```javascript
console.log(null ?? "hello"); // hello
console.log(undefined ?? false); // false
console.log(false ?? null); // false
console.log(110 ?? null); // 110
console.log(undefined ?? 0); // 0
```

This operator is very useful in situations where we have to initialise a variable to a default value if there is no data present.

```javascript
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
// {
//     username: 'johndoe',
//     email: 'jdoe20@email.com',
//     friends: 1,
//     bio: 'Default User Bio'
// }

console.log(user2);
// {
//     username: 'bobsmith',
//     email: 'bsmith32@email.com',
//     friends: 1,
//     bio: 'Default User Bio'
// }
```

As we can see from above the user data for `user1` has been wrongly updated because the values `user1.friends` and `user1.bio` are valid values despite being set to **0** and **""**.

Using the `??` in this situation would avoid such errors and only if the fields are not set they will be correctly updated.

```javascript
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
// {
//     username: 'johndoe',
//     email: 'jdoe20@email.com',
//     friends: 0,
//     bio: ''
// }

console.log(secondUser);
// {
//     username: 'bobsmith',
//     email: 'bsmith32@email.com',
//     friends: 1,
//     bio: 'Default User Bio'
// }
```

## Logical Assignment Operators

These set of operators were introduced in ES 2021. They are just syntactic sugar over existing JavaScript features.

### Logical OR Assignment

The logical OR assignment `x ||= y` operator only assigns if `x` is falsy.

### Logical AND Assignment

The logical AND assignment `x &&= y` operator only assigns if `x` is truthy.

### Logical Nullish Assignment

The logical nullish assignment `x ??= y` operator only assigns if `x` is nullish.

```javascript
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
book1.pageCount ||= 10;
// book1.pageCount = book1.pageCount || 10

// Logical AND assignment
book1.author &&= "N/A";
// book1.author = book1.author && "N/A"

book2.author &&= "N/A";
// book2.author = book1.author && "N/A"

// Logical nullish assignment
book1.genre ??= "fantasy";
// book1.genre = book1.genre ?? "fantasy"

book2.genre ??= "fantasy";
// book2.genre = book2.genre ?? "fantasy"

book2.pageCount ??= 500;
// book2.pageCount = book2.pageCount ?? 500

console.log(book1);
// {
//     "title": "Harry Potter",
//     "pageCount": 10,
//     "genre": ""
// }

console.log(book2);
// {
//     "title": "Lord Of The Rings",
//     "author": "N/A",
//     "genre": "fantasy",
//     "pageCount": 500
// }
```

## Closing Notes

- The nullish coalescing operator `??` returns the right hand side operand when the left hand side operand is `null` or `undefined` otherwise it returns the left hand side operand.

- The logical assignment operators do not add any existing functionality; they can be replaced with their expanded form.

- The modern operators discussed in this article may not work in may browsers/platforms based on current ES implementation so care should be taken before using them.

## Further Reference

- [MDN - Nullish Coalescing Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [MDN - Logical OR Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
- [MDN - Logical AND Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
- [MDN - Logical Nullish Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)
