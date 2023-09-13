"use strict";
let num = Math.trunc(Math.random() * 20 + 1);
console.log(num);
let score = 20;
let finalScore;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess-num").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number !";
  } else {
    if (num === guess) {
      document.querySelector(".message").textContent = " Correct Number :)";
      document.body.style.background = "#4caf50";
      document.querySelector(".number").textContent = num;
      finalScore = score;
    } else {
      if (score > 1) {
        if (num > guess) {
          document.querySelector(".message").textContent = " Too low!";
          score--;
          document.querySelector(".score").textContent = score;
        } else {
          document.querySelector(".message").textContent = " Too high!";
          score--;
          document.querySelector(".score").textContent = score;
        }
      } else {
        document.querySelector(".score").textContent = 0;
        document.querySelector(".message").textContent = " You lost :(";
        document.body.style.background = "#d92525";
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess-num").value = "";
  document.body.style.background = "#333";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;

//   if (score > highScore) {
//     highScore = score;
//     document.querySelector(".highscore").textContent = highScore;
//   }
});
