#! /usr/bin/env node
import inquirer from "inquirer";
let game = "user_choice";
while (game) {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    const answer = await inquirer.prompt([
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
    ;
    let Choice = await inquirer.prompt([{
            message: "Want to play again ",
            type: "confirm",
            choice: ["Yes", "No"],
            name: "user_choice",
            default: "true"
        }]);
    game = Choice.user_choice;
    if (Choice.user_choice == "No") {
        console.log();
    }
}
