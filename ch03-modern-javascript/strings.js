"use strict";
console.clear();

const string = "The Quick Brown Fox Jumps Over The Lazy Dog";
console.log(string);

// Get the character at index 0, 1, 10
console.log(string[0]); // T
console.log(string[1]); // h
console.log(string[10]); // B

// Length of string
console.log(string.length); // 43

// Return the first index of a character
console.log(string.indexOf("T")); // 0

// Return the last index of a character
console.log(string.lastIndexOf("T")); // 31

// Return the first and last index of a word
console.log(string.indexOf("The")); // 0
console.log(string.indexOf("Fox")); // 16
console.log(string.lastIndexOf("The")); // 31

// Index of an item that does not exist
console.log(string.indexOf("dog")); // -1

// Slice operations on string
console.log(string.slice(20)); // Jumps Over The Lazy Dog

// Slice with start and end index
console.log(string.slice(0, 4)); // The
console.log(string.slice(5, 10)); // uick

// Slice using variables
console.log(string.slice(string.lastIndexOf("The"))); // The Lazy Dog
console.log(string.slice(string.indexOf("Fox"), string.lastIndexOf("The"))); // Fox Jumps Over

// Extract the first word of the string
console.log(string.slice(0, string.indexOf(" "))); // The

// Extract the last word of the string
console.log(string.slice(string.lastIndexOf(" ") + 1)); // Dog

// Negative index slicing
console.log(string.slice(-5)); // y Dog
console.log(string.slice(-10, -1)); // e Lazy Do

// Check for the presence of sub-string
console.log(string.includes("fox")); // false
console.log(string.includes("Lazy")); // true
console.log(string.includes("ship")); // false
console.log(string.includes("f")); // false
console.log(string.includes("p")); // true
console.log(string.startsWith("the")); // false
console.log(string.startsWith("The")); // true
console.log(string.endsWith("Fox")); // false
console.log(string.endsWith("Dog")); // true

const newString = "there is a bad the and there is a good the but there are a lot of the";
const singleReplacement = newString.replace("but", "byt");
const replacedString = newString.replaceAll("the", "them"); // will replace words like "there" to "themre"

console.log(newString);
// there is a bad the and there is a good the but there are a lot of the

console.log(singleReplacement);
// there is a bad the and there is a good the byt there are a lot of the

console.log(replacedString);
// themre is a bad them and themre is a good them but themre are a lot of them

console.log("\n");

const longString = "This+IS+A+very+long+and+bad+string_developer_timestamp_T2320";
console.log(longString);

// Splitting a string - string is split based on format string into an array of strings
const splitString = longString.split("+");
const brokenString = longString.split("_");

console.log(splitString);
console.log(brokenString);

// Destructuring the results of split string
const [resultString1, ...others] = longString.split("_");

console.log("\nString With +");
console.log(resultString1);

console.log("\nString With _");
console.log(others);

// Joining strings - combines elements of array into a single string
const resultString2 = others.join(" ");
console.log(resultString2);

// A combined operation in single step
const joinedString = resultString1.split("+").join(" ");
console.log(joinedString);

function capitalize(string) {
  const words = string.split(" ");
  const buffer = [];
  for (let word of words) {
    buffer.push(word.replace(word[0], word[0].toUpperCase()));
  }
  return buffer.join(" ");
}

console.log(capitalize("hello how are you"));

// String padding
function stringPadding(string, length, mode = 0) {
  if (mode === 0) {
    return string.padStart(length, "#");
  }
  if (mode === 1) {
    return string.padEnd(length, "$");
  }
  if (mode === 2) {
    return string.padStart(length / 2, "#").padEnd(length, "$");
  }
  return string;
}

console.log(stringPadding("hello", 20, 2));

const warning = "[ERR] THIS IS AN ALERT! EVACUATE IMMEDIATELY!";
console.log(warning.repeat(5));
