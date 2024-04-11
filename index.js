"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var randomNumber = Math.floor(Math.random() * 6 + 1);
var answer = await inquirer_1.default.prompt([
    {
        message: "Guess a number between 1-10",
        type: "number",
        name: "numberGuessed",
    },
]);
if (answer.numberGuessed === randomNumber) {
    console.log("Congratulations! You Guessed Right Number.");
}
else {
    console.log("Better Luck Next Time! The Correct answer was " + randomNumber);
}
