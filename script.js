"use strict";
let num = Math.trunc(Math.random() * 20 + 1);
console.log(num);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess-num").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number !";
  } else {
    if (num === guess) {
      document.querySelector(".message").textContent = " Correct Number :)";
      document.body.style.background = "#4caf50";
      document.querySelector(".number").textContent = num;
    } else {
      if (num > guess) {
        document.querySelector(".message").textContent = " Too low!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = " Too high!";
        score--;
        document.querySelector(".score").textContent = score;
      }
    }
  }
});
