"use strict";

//originalStory 'In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}'

//Total question
let totalQuestion = 3;

let questionCounter = 0;

//question array
let questionArray = [
    "What is your name?",
    "Tell me about your favorite hobby",
    "What about your favorite programming language?",
    "well, what about your favorite food?!",
];

//array of user inputs
let userInputs = [];
//logic that will store the user inputs in the correct variables
for (let i = totalQuestion; i >= 0; i--) {
    console.log(
        questionArray[questionCounter] + `... (${totalQuestion} questions left)`
    );
    var checkInput = prompt(
        questionArray[questionCounter] + `... (${totalQuestion} questions left)`
    );

    if (checkInput === "") {
        userInputs.push(`THE USER DIDN'T WRITE ANYTHING`);
    } else {
        userInputs.push(checkInput);
    }

    console.log(`This is the current "questionCounter" : ${questionCounter}`);
    console.log(userInputs);
    questionCounter++;
    totalQuestion--;
}
alert(
    "All done! Ready for your totally-accurate, not-at-all confusing summary of yourself??"
);
//the story
let originalStory = `<h2>Hello my name is ${userInputs[0]}, and my favorite hobby is ${userInputs[1]} also my favorite programming language is ${userInputs[2]}. and I really love to eat ${userInputs[3]}</h2>`;

document.write(originalStory);