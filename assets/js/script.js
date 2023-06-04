// Wait for page to finish loading

document.addEventListener("DOMContentLoaded", function () {
    runHiraganaGame();
});

// Hiragana: Declarations
const hiraganaQuestion = document.getElementById("hiragana-question");
const currentScore = document.getElementById("score");
const buttons = document.getElementsByTagName("button");
const maxQuestions = 10;

let currentHiraganaQuestion = {};
let hiraganaScore = 0;
let hiraganaQuestionCounter = 0;
let availableHiraganaQuestions = [];
let acceptingAnswers = false;

// Hiragana object array
const hiragana = [{
    character: "あ",
    phonetic: "a"
}, {
    character: "か",
    phonetic: "ka"
}, {
    character: "さ",
    phonetic: "sa"
}, {
    character: "た",
    phonetic: "ta"
}, {
    character: "な",
    phonetic: "na"
}, {
    character: "は",
    phonetic: "ha"
}, {
    character: "ま",
    phonetic: "ma"
}, {
    character: "や",
    phonetic: "ya"
}, {
    character: "ら",
    phonetic: "ra"
}, {
    character: "わ",
    phonetic: "wa"
}, {
    character: "い",
    phonetic: "i"
}, {
    character: "き",
    phonetic: "ki"
}, {
    character: "し",
    phonetic: "shi"
}, {
    character: "ち",
    phonetic: "chi"
}, {
    character: "に",
    phonetic: "ni"
}, {
    character: "ひ",
    phonetic: "hi"
}, {
    character: "み",
    phonetic: "mi"
}, {
    character: "り",
    phonetic: "ri"
}, {
    character: "う",
    phonetic: "u"
}, {
    character: "く",
    phonetic: "ku"
}, {
    character: "す",
    phonetic: "su"
}, {
    character: "つ",
    phonetic: "tsu"
}, {
    character: "ぬ",
    phonetic: "nu"
}, {
    character: "ふ",
    phonetic: "fu"
}, {
    character: "む",
    phonetic: "mu"
}, {
    character: "ゆ",
    phonetic: "yu"
}, {
    character: "る",
    phonetic: "ru"
}, {
    character: "え",
    phonetic: "e"
}, {
    character: "け",
    phonetic: "ke"
}, {
    character: "せ",
    phonetic: "se"
}, {
    character: "て",
    phonetic: "te"
}, {
    character: "ね",
    phonetic: "ne"
}, {
    character: "へ",
    phonetic: "he"
}, {
    character: "め",
    phonetic: "me"
}, {
    character: "れ",
    phonetic: "re"
}, {
    character: "お",
    phonetic: "o"
}, {
    character: "こ",
    phonetic: "ko"
}, {
    character: "そ",
    phonetic: "so"
}, {
    character: "と",
    phonetic: "to"
}, {
    character: "の",
    phonetic: "no"
}, {
    character: "ほ",
    phonetic: "ho"
}, {
    character: "も",
    phonetic: "mo"
}, {
    character: "よ",
    phonetic: "yo"
}, {
    character: "ろ",
    phonetic: "ro"
}, {
    character: "を",
    phonetic: "wo"
}, {
    character: "ん",
    phonetic: "n"
}]

// Hiragana: Start game function
function runHiraganaGame() {
    hiraganaScore = 0;
    hiraganaQuestionCounter = 0;
    availableHiraganaQuestions = [...hiragana];
    newHiraganaQuestion();
}

// Hiragana: New random question function
function newHiraganaQuestion() {
    // If 10 questions have been asked, display unique message depending on score
    // Restart game or go back to the homepage depending on button press
    if (hiraganaQuestionCounter >= maxQuestions) {
        if (hiraganaScore = 10) {
            Swal.fire({
                title: "You scored 10/10!",
                html: "Amazing! You have excellent knowledge of hiragana, and you should be proud of yourself!<br>Would you like to play again?",
                allowEscapeKey: false,
                allowEnterKey: false,
                allowOutsideClick: false,
                confirmButtonText: '<a href="hiragana.html">Play Again!</a>',
                showDenyButton: true,
                denyButtonText: '<a href="index.html">Choose a Different Game</a>',
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
        } else if (hiraganaScore = 0) {
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

    // Increase the question counter by 1 each time
    hiraganaQuestionCounter++;

    // Pick a random hiragana and display the character as the question
    const hiraganaQuestionIndex = Math.floor(Math.random() * availableHiraganaQuestions.length);
    currentHiraganaQuestion = availableHiraganaQuestions[hiraganaQuestionIndex];
    hiraganaQuestion.innerText = currentHiraganaQuestion.character;

    // Take the phonetic of the current hiragana and pick 3 others from the list at random
    const hiraganaAnswers = [currentHiraganaQuestion];
    while (hiraganaAnswers.length < 4) {
        let randomHiraganaIndex = Math.floor(Math.random() * hiragana.length);
        if (!hiraganaAnswers.some((answer) => answer === hiragana[randomHiraganaIndex])) {
            hiraganaAnswers.push(hiragana[randomHiraganaIndex]);
        }
    }

    for (let button of buttons) {
        shuffle(hiraganaAnswers);
        let j = 0
        button.innerText = hiraganaAnswers[j].phonetic;
        hiraganaAnswers.splice[j];
        j++;
    }

    // Splice the current question out of the array so it doesn't appear twice
    availableHiraganaQuestions.splice(hiraganaQuestionIndex, 0);

    // Once everything has loaded, allow answers
    acceptingAnswers = true;
}

// Fisher-Yates shuffle method
function shuffle(hiraganaAnswers) {
    let i = hiraganaAnswers.length;
    while (--i > 0) {
        let temp = Math.floor(Math.random() * (i + 1));
        [hiraganaAnswers[temp], hiraganaAnswers[i]] = [hiraganaAnswers[i], hiraganaAnswers[temp]];
    }
    return hiraganaAnswers;
}

// Hiragana: Listen for click & check answer, display new question
for (let button of buttons) {
    button.addEventListener("click", function (event) {

        if (!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedAnswer = event.target;

        if (selectedAnswer.innerText === currentHiraganaQuestion.phonetic) {
            // If answer is correct, increase score + green background
            hiraganaScore++;
            currentScore.innerText = [hiraganaScore];
            this.classList.add("correct");
        } else {
            // If incorrect, red background
            this.classList.add("incorrect");
        }

        setTimeout(() => {
            selectedAnswer.classList.remove("correct", "incorrect");
            newHiraganaQuestion();
        }, 500);
    });
}


// Katakana: Start game

// Katakana: Choose question (random)

// Katakana: Display question with 4 potential answers

// Katakana: User clicks answer

// Katakana: Check the answer

// Katakana: If correct, answer turns green and increases correct score

// Katakana: If incorrect, answer turns red and increases incorrect score

// Katakana: Display next question (up to 10?)

// Katakana: After final question, display final score with message depending on score

// Katakana: Restart the game