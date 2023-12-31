"use strict";

let num = Math.trunc(Math.random() * 20 + 1);
console.log(num);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess-num").value);
  if (!guess) {
    displayMessage("No number !");
  } else if (num === guess) {
    displayMessage(" Correct Number :)");
    document.body.style.background = "#4caf50";
    document.querySelector(".number").textContent = num;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== num) {
    if (score > 1) {
      if (num > guess) {
        displayMessage(" Too low!");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage(" Too high!");
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      document.querySelector(".score").textContent = 0;
      displayMessage(" You lost :(");
      document.body.style.background = "#d92525";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  num = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess-num").value = "";
  document.body.style.background = "#333";

  console.log(num);
});
