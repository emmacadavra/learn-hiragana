// Wait for page to finish loading

document.addEventListener("DOMContentLoaded", function () {
    runKatakanaGame();
});

// Global declarations
const currentScore = document.getElementById("score");
const buttons = document.getElementsByTagName("button");
const maxQuestions = 10;
let acceptingAnswers = false;