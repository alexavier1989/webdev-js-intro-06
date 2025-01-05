"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

function evenOrOdd() {
    const num = 3;
    const value = num % 2 === 0 ? "Even" : "Odd";
    evenOrOddElement.innerText = value;
}

function sumTheNumbers() {
    let sum = 0;
    for (let index = 0; index < 11; index++) {
       sum += index;
    }
    sumTheNumbersElement.innerText = sum;
}

function createNumberArray() {
    const numberArray = [];
    for (let index = 0; index < 10; index++) {
        numberArray.push(index + 1);
    }
    createNumberArrayElement.innerText = numberArray;
}

function render() {
    evenOrOdd();
    sumTheNumbers();
    createNumberArray();
}

submissionBtn.addEventListener("click", function () {
    render();
});
