"use strict";

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const reset = document.querySelector(".reset");

const rectOne = document.querySelector(".rect1");
const leftChev = document.querySelector(".leftChevron");
const rightChev = document.querySelector(".rightChevron");

// initial state

const init = function () {
  reset.addEventListener("click", function () {
    document.querySelector(".rect1").style.width = "";
    document.querySelector(".rect1").style.backgroundColor = "";
    document.querySelector(".rect2").style.width = "";
    document.querySelector(".rect2").style.backgroundColor = "";
    document.querySelector(".rect1").style.border = "";
    document.querySelector(".rect2").style.border = "";
  });
};

init();

// shrink rect1
leftChev.addEventListener("click", function () {
  document.querySelector(".rect1").style.width = "10%";
  document.querySelector(".rect1").style.backgroundColor = "#DCDCDC";
  document.querySelector(".rect1").style.border = "2px solid #D1D1D1";
});
// shrink rect2
rightChev.addEventListener("click", function () {
  document.querySelector(".rect2").style.width = "10%";
  document.querySelector(".rect2").style.backgroundColor = "#DCDCDC";
  document.querySelector(".rect2").style.border = "2px solid #D1D1D1";
});

let guessCount = 1;
let resetButton;

const arrPractice = [0, 3, 6, 78, 4, 6];

// Celsius to Farenheit

// The function should take a Celsius temperature as its parameter.
// Use the formula to convert Celsius to Fahrenheit
// F = C * 1.8 + 32

const submit = document.querySelector("#logButton");
const updatedTemp = document.querySelector(".updatedTemp");
const resetBtn = document.querySelector(".resetInput");
const numberInput = document.querySelector("#numberInput");

const initial = function () {
  resetBtn.textContent = " ";
  updatedTemp.textContent = " ";
  numberInput.value = "";
  resetBtn.style.display = "none";
};

initial();

// on click reset
resetBtn.addEventListener("click", function () {
  initial();
});

// convert Celsius to Farenheit
const convertToFarenheit = function (degreeCel) {
  const faren = degreeCel * 1.8 + 32;
  console.log(faren);
  updatedTemp.textContent = faren;
  return faren;
};

// on click celsius converter
submit.addEventListener("click", function () {
  let userInput = numberInput.value;
  convertToFarenheit(userInput);
  resetBtn.style.display = "block";
  resetBtn.textContent = "Reset";
  // calcState = true;
});
