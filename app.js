"use strict";

//originalStory 'In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}'

//Total question
let numberOfQuestions = 3;

let questionCounter = 0;

//user-prompts for each mad-lib replacement, e.g. "Enter a verb", "Enter a noun", etc.
let enterVerb = prompt("Enter a verb");
let enterNoun = prompt("Enter a noun");
let enterAdjective = prompt("Enter an adjective");

//push user inputs into array
let questionArray = [enterVerb, enterNoun, enterAdjective];

//logic that will store the user inputs in the correct variables
for (let i = numberOfQuestions; i >= 0; i--) {
    console.log(questionCounter++);
}

//the story
let originalStory = `In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}`;

//array of user inputs
let userInputs = [];