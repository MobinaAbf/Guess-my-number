"use strict";
let num = Math.trunc(Math.random() * 20 + 1);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess-num").value);
  if (num === guess) {
    document.querySelector(".message").textContent = " Correct Number :)";
  } else {
    if (num > guess) {
      document.querySelector(".message").textContent = " Too low!";
    } else {
      document.querySelector(".message").textContent = " Too high!";
    }
  }
});
