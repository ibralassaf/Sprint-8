"use strict";

//originalStory 'In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}'

//Total question
let totalQuestion = 3;

let questionCounter = 0;

//user-prompts for each mad-lib replacement, e.g. "Enter a verb", "Enter a noun", etc.
let enterName = prompt(
    "What is your name: " + `; (${totalQuestion--} questions left)`
);
let enterHobby = prompt(
    "What is your favorite hobby: " + `; (${totalQuestion--} questions left)`
);
let enterColor = prompt(
    "What is your favorite color: " + `; (${totalQuestion--} questions left)`
);

//push user inputs into array
let questionArray = [enterName, enterHobby, enterColor];

//read the zero-th index (of your array) *first*, and *then* increase the counter).
console.log(questionArray[0]);

//logic that will store the user inputs in the correct variables
for (let i = 2; i > 0; i--) {
    questionCounter++;
    console.log(questionArray[questionCounter]);
}

//the story
let originalStory = `In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}`;

//array of user inputs
let userInputs = [];