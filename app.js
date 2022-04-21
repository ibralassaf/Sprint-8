"use strict";

//originalStory 'In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}'

//Total question
let totalQuestion = 3;

let questionCounter = 0;

//question array
let questionArray = [
    "Enter your full name",
    "Enter your favorite hobby",
    "Enter your favorite programming language",
    "Enter your favorite food",
];

//array of user inputs
let userInputs = [];
//logic that will store the user inputs in the correct variables
for (let i = totalQuestion; i >= 0; i--) {
    console.log(
        questionArray[questionCounter] + `... (${totalQuestion} questions left)`
    );
    userInputs.push(
        prompt(
            questionArray[questionCounter] + `... (${totalQuestion} questions left)`
        )
    );
    console.log(`This is the current "questionCounter" : ${questionCounter}`);
    console.log(userInputs);
    questionCounter++;
    totalQuestion--;
}
alert(
    "All done! Ready for your totally-accurate, not-at-all confusing history of tech??"
);

//the story
//let originalStory = `In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}`;