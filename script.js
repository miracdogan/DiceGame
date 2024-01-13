"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting things
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

//Rolling the dice
btnRoll.addEventListener("click", function () {
  //Generate random dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  //Remove hidden class
  diceEl.classList.remove("hidden");
  diceEl.src = `img/dice-${dice}.png`;

  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //Next player
  }
});
