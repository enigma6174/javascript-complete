"use strict";

// Get the starting score from the DOM
const START_SCORE = document.querySelector(".score").textContent;

// Initialize the starting score and high score
let score = Number(START_SCORE);
let highScore = 0;

// Generate a random integer between [1, 20]
let secretNumber = Math.trunc(Math.random() * score) + 1;

// Function to show appropriate message to user
function setMessage(content) {
  document.querySelector(".message").textContent = content;
}

// Function to modify button behavior on game end
function onGameEnd(color) {
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".check").setAttribute("disabled", true);
}

// Function to handle the game when score reaches 0
function validateScore() {
  if (score === 0) {
    setMessage("YOU LOST!");
    onGameEnd("#f54242");
  }
}

// Function to update the score on every turn
function updateScore(value) {
  score += value;
  document.querySelector(".score").textContent = score;
  validateScore(score);
}

// Function to check the user input on every turn
function checkNumber(number) {
  if (!number) {
    setMessage("NOT ALLOWED!");
  } else if (number === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    setMessage("YOU WIN!!!!!!");
    onGameEnd("#60b347");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (number > secretNumber) {
    setMessage("Guess Lower!");
    return -1;
  } else if (number < secretNumber) {
    setMessage("Guess Higher!");
    return -1;
  }
  return 0;
}

function start() {
  if (score > 0) {
    const currentValue = Number(document.querySelector(".guess").value);
    const penalty = checkNumber(currentValue);
    updateScore(penalty);
  }
}

function restart() {
  // Initialize the starting score and secret numbers
  score = Number(START_SCORE);
  secretNumber = Math.trunc(Math.random() * score) + 1;

  // Reset the DOM elements back to original values
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".check").removeAttribute("disabled");
  document.querySelector(".score").textContent = START_SCORE;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
}

// Display the secret number for guessing: only for development
// document.querySelector(".number").textContent = secretNumber;

// Event listener to Check! button
document.querySelector(".check").addEventListener("click", start);

// Event listener for Again! button
document.querySelector(".again").addEventListener("click", restart);
