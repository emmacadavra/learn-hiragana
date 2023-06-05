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


/**
 * Sets score & question counter to 0,
 * Pulls question list from respective alphabet file,
 * Calls newQuestion function
 */
function runGame() {
    score = 0;
    questionCounter = 0;
    availableQuestions = [...questions];
    newQuestion();
}

// New random question function
function newQuestion() {

    if (questionCounter >= maxQuestions) {
        endGameMessage();
    }

    questionCounter++;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.character;

    let answers = [currentQuestion];
    while (answers.length < 4) {
        let randomIndex = Math.floor(Math.random() * questions.length);
        if (!answers.some((answer) => answer === questions[randomIndex])) {
            answers.push(questions[randomIndex]);
        }
    }

    answers = shuffle(answers);

    let i = 0;

    for (let button of buttons) {
        button.innerText = answers[i].phonetic;
        i++;
    }

    availableQuestions.splice(questionIndex, 0);

    acceptingAnswers = true;
}

function shuffle(array) {
    let j = (array.length);
    while (--j > 0) {
        let temp = Math.floor(Math.random() * (j + 1));
        [array[temp], array[j]] = [array[j], array[temp]];
    }
    return array;
}

// Listen for click & check answer, display new question
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
            html: `Amazing! You have excellent knowledge of ${alphabet}, and you should be proud of yourself!<br>Would you like to play again?`,
            allowEscapeKey: false,
            allowEnterKey: false,
            allowOutsideClick: false,
            confirmButtonText: '<a class="play-again" onclick="location.reload()">Play Again!</a>',
            showDenyButton: true,
            denyButtonText: '<a class="different-game" href="index.html">Choose a Different Game</a>',
        })
    } else if (score < 10 && score >= 7) {
        Swal.fire({
            title: `You scored ${score}/10!`,
            html: `Well done! You have good knowledge of ${alphabet}! Keep practising and you will be confident in no time.<br>Would you like to play again?`,
            allowEscapeKey: false,
            allowEnterKey: false,
            allowOutsideClick: false,
            confirmButtonText: '<a class="play-again" onclick="location.reload()">Play Again!</a>',
            showDenyButton: true,
            denyButtonText: '<a class="different-game" href="index.html">Choose a Different Game</a>',
        })
    } else if (score < 7 && score >= 4) {
        Swal.fire({
            title: `You scored ${score}/10!`,
            html: `Keep trying! You have some knowledge of ${alphabet}, and with practise your knowledge will surely grow!<br>Would you like to play again?`,
            allowEscapeKey: false,
            allowEnterKey: false,
            allowOutsideClick: false,
            confirmButtonText: '<a class="play-again" onclick="location.reload()">Play Again!</a>',
            showDenyButton: true,
            denyButtonText: '<a class="different-game" href="index.html">Choose a Different Game</a>',
        })
    } else if (score < 4 && score >= 1) {
        Swal.fire({
            title: `You scored ${score}/10!`,
            html: "Don't give up! Practise makes perfect, so keep trying and your knowledge will surely grow!<br>Would you like to play again?",
            allowEscapeKey: false,
            allowEnterKey: false,
            allowOutsideClick: false,
            confirmButtonText: '<a class="play-again" onclick="location.reload()">Play Again!</a>',
            showDenyButton: true,
            denyButtonText: '<a class="different-game" href="index.html">Choose a Different Game</a>',
        })
    } else if (score === 0) {
        Swal.fire({
            title: `You scored 0/10 :(`,
            html: "Oh no! Unfortunately you didn't get any questions right this time, but don't give up trying - practise makes perfect!<br>Would you like to play again?",
            allowEscapeKey: false,
            allowEnterKey: false,
            allowOutsideClick: false,
            confirmButtonText: '<a class="play-again" onclick="location.reload()">Play Again!</a>',
            showDenyButton: true,
            denyButtonText: '<a class="different-game" href="index.html">Choose a Different Game</a>',
        })
    }
}