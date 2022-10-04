"use strict";

let currentScore = 0;
let currentPlayer = 0;

// Array which contains the current total score of both players
const totalScores = [0, 0];

const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

// Function to initialize the game
function init() {
  currentScore = 0;
  currentPlayer = 0;
  totalScores[0] = 0;
  totalScores[1] = 0;

  rollDiceBtn.classList.remove("disable");
  rollDiceBtn.removeAttribute("disabled");

  holdBtn.classList.remove("disable");
  holdBtn.removeAttribute("disabled");

  document.querySelector(".dice").classList.add("hidden");

  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;

  document.querySelector(`.player--${currentPlayer}`).classList.add("player--active");

  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
}

init();

// Function to switch a player
function switchPlayer() {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  document.querySelector(`.player--${currentPlayer}`).classList.remove("player--active");

  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;

  document.querySelector(`.player--${currentPlayer}`).classList.add("player--active");
}

// Function to handle events when the game ends
function endGame() {
  rollDiceBtn.classList.add("disable");
  rollDiceBtn.setAttribute("disabled", true);

  holdBtn.classList.add("disable");
  holdBtn.setAttribute("disabled", true);

  document.querySelector(".dice").classList.add("hidden");
  document.querySelector(`.player--${currentPlayer}`).classList.add("player--winner");
  document.querySelector(`.player--${currentPlayer}`).classList.remove("player--active");
}

// Event handler for rollDiceBtn element
rollDiceBtn.addEventListener("click", function () {
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRoll);

  document.querySelector(".dice").classList.remove("hidden");
  document.querySelector(".dice").src = `dice-${diceRoll}.png`;

  if (diceRoll != 1) {
    currentScore += diceRoll;
    document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
  }
});

// Event handler for hldBtn element
holdBtn.addEventListener("click", function () {
  totalScores[currentPlayer] += currentScore;
  document.getElementById(`score--${currentPlayer}`).textContent = totalScores[currentPlayer];

  if (totalScores[currentPlayer] >= 100) {
    endGame();
  } else {
    switchPlayer();
  }
});

// Event handler for newGameBtn
newGameBtn.addEventListener("click", function () {
  init();
});
