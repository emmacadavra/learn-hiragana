// Wait for page to finish loading

document.addEventListener("DOMContentLoaded", function () {
    runGame();
});

// Declarations
const currentScore = document.getElementById("score");
const buttons = document.getElementsByTagName("button");
const maxQuestions = 10;
const question = document.getElementById("current-question");
let acceptingAnswers = false;

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


// Start game function
function runGame() {
    score = 0;
    questionCounter = 0;
    availableQuestions = [...hiragana];
    newQuestion();
}

// New random question function
function newQuestion() {
    // If 10 questions have been asked, display unique message depending on score
    // Restart game or go back to the homepage depending on button press
    if (questionCounter >= maxQuestions) {
        endGameMessage();
    }

    // Increase the question counter by 1 each time
    questionCounter++;

    // Pick a random question and display the character as the question
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.character;

    // Take the phonetic of the current question and pick 3 others from the list at random
    const answers = [currentQuestion];
    while (answers.length < 4) {
        let randomIndex = Math.floor(Math.random() * questions.length);
        if (!answers.some((answer) => answer === questions[randomIndex])) {
            answers.push(questions[randomIndex]);
        }
    }

    // Shuffle the 4 potential answers to each question
    function shuffle() {
        let j = (answers.length);
        while (--j > 0) {
            let temp = Math.floor(Math.random() * (j + 1));
            [answers[temp], answers[j]] = [answers[j], answers[temp]];
        }
        return answers;
    }

    shuffle();

    // Display the shuffled potential answers
    let i = 0;

    for (let button of buttons) {
        button.innerText = answers[i].phonetic;
        i++;
    }

    // Splice the current question out of the array so it doesn't appear twice
    availableQuestions.splice(questionIndex, 0);

    // Once everything has loaded, allow answers
    acceptingAnswers = true;
}

// Hiragana: Listen for click & check answer, display new question
for (let button of buttons) {
    button.addEventListener("click", function (event) {

        if (!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedAnswer = event.target;

        if (selectedAnswer.innerText === currentQuestion.phonetic) {
            // If answer is correct, increase score + green background
            score++;
            currentScore.innerText = [score];
            this.classList.add("correct");
        } else {
            // If incorrect, red background
            this.classList.add("incorrect");
        }

        // Remove temporary classes with red/green backgrounds, set a short timeout before loading next question
        setTimeout(() => {
            selectedAnswer.classList.remove("correct", "incorrect");
            newQuestion();
        }, 500);
    });
}

function endGameMessage() {
    if (score === 10) {
        Swal.fire({
            title: "You scored 10/10!",
            html: "Amazing! You have excellent knowledge of this alphabet, and you should be proud of yourself!<br>Would you like to play again?",
            allowEscapeKey: false,
            allowEnterKey: false,
            allowOutsideClick: false,
            confirmButtonText: '<a class="play-again" onclick="location.reload()">Play Again!</a>',
            showDenyButton: true,
            denyButtonText: '<a class="different-game" href="index.html">Choose a Different Game</a>',
        })
    } else if (hiraganaScore < 10 && hiraganaScore >= 7) {
        Swal.fire({
            title: `You scored ${hiraganaScore}/10!`,
            html: "Well done! You have good knowledge of hiragana! Keep practising and you will be confident in no time.<br>Would you like to play again?",
            allowEscapeKey: false,
            allowEnterKey: false,
            allowOutsideClick: false,
            confirmButtonText: '<a href="hiragana.html">Play Again!</a>',
            showDenyButton: true,
            denyButtonText: '<a href="index.html">Choose a Different Game</a>',
        })
    } else if (hiraganaScore < 7 && hiraganaScore >= 4) {
        Swal.fire({
            title: `You scored ${hiraganaScore}/10!`,
            html: "Keep trying! You have some knowledge of hiragana, and with practise your knowledge will surely grow!<br>Would you like to play again?",
            allowEscapeKey: false,
            allowEnterKey: false,
            allowOutsideClick: false,
            confirmButtonText: '<a href="hiragana.html">Play Again!</a>',
            showDenyButton: true,
            denyButtonText: '<a href="index.html">Choose a Different Game</a>',
        })
    } else if (hiraganaScore < 4 && hiraganaScore >= 1) {
        Swal.fire({
            title: `You scored ${hiraganaScore}/10!`,
            html: "Don't give up! Practise makes perfect, so keep trying and your knowledge will surely grow!<br>Would you like to play again?",
            allowEscapeKey: false,
            allowEnterKey: false,
            allowOutsideClick: false,
            confirmButtonText: '<a href="hiragana.html">Play Again!</a>',
            showDenyButton: true,
            denyButtonText: '<a href="index.html">Choose a Different Game</a>',
        })
    } else if (hiraganaScore === 0) {
        Swal.fire({
            title: `You scored ${hiraganaScore}/10 :(`,
            html: "Oh no! Unfortunately you didn't get any questions right this time, but don't give up trying - practise makes perfect!<br>Would you like to play again?",
            allowEscapeKey: false,
            allowEnterKey: false,
            allowOutsideClick: false,
            confirmButtonText: '<a href="hiragana.html">Play Again!</a>',
            showDenyButton: true,
            denyButtonText: '<a href="index.html">Choose a Different Game</a>',
        })
    }
}