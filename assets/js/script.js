// Wait for page to finish loading

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname === "/hiragana.html") {
        runHiraganaGame();
    } else if (window.location.pathname === "/katakana.html") {
        runKatakanaGame();
    }
});
// Global declarations
const currentScore = document.getElementById("score");
const buttons = document.getElementsByTagName("button");
const maxQuestions = 10;
let acceptingAnswers = false;

// Hiragana: Declarations
const hiraganaQuestion = document.getElementById("hiragana-question");

let currentHiraganaQuestion = {};
let hiraganaScore = 0;
let hiraganaQuestionCounter = 0;
let availableHiraganaQuestions = [];

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

    // Shuffle the 4 potential answers to each question
    function hiraganaShuffle() {
        let j = (hiraganaAnswers.length);
        while (--j > 0) {
            let temp = Math.floor(Math.random() * (j + 1));
            [hiraganaAnswers[temp], hiraganaAnswers[j]] = [hiraganaAnswers[j], hiraganaAnswers[temp]];
        }
        return hiraganaAnswers;
    }

    hiraganaShuffle();

    // Display the shuffled potential answers
    let i = 0;

    for (let button of buttons) {
        button.innerText = hiraganaAnswers[i].phonetic;
        i++;
    }

    // Splice the current question out of the array so it doesn't appear twice
    availableHiraganaQuestions.splice(hiraganaQuestionIndex, 0);

    // Once everything has loaded, allow answers
    acceptingAnswers = true;
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

        // Remove temporary classes with red/green backgrounds, set a short timeout before loading next question
        setTimeout(() => {
            selectedAnswer.classList.remove("correct", "incorrect");
            newHiraganaQuestion();
        }, 500);
    });
}

// Katakana: Declarations
const katakanaQuestion = document.getElementById("katakana-question");

let currentKatakanaQuestion = {};
let katakanaScore = 0;
let katakanaQuestionCounter = 0;
let availableKatakanaQuestions = [];

// Katakana object array
const katakana = [{
    character: "ア",
    phonetic: "a"
}, {
    character: "カ",
    phonetic: "ka"
}, {
    character: "サ",
    phonetic: "sa"
}, {
    character: "タ",
    phonetic: "ta"
}, {
    character: "ナ",
    phonetic: "na"
}, {
    character: "ハ",
    phonetic: "ha"
}, {
    character: "マ",
    phonetic: "ma"
}, {
    character: "ヤ",
    phonetic: "ya"
}, {
    character: "ラ",
    phonetic: "ra"
}, {
    character: "ワ",
    phonetic: "wa"
}, {
    character: "イ",
    phonetic: "i"
}, {
    character: "キ",
    phonetic: "ki"
}, {
    character: "シ",
    phonetic: "shi"
}, {
    character: "チ",
    phonetic: "chi"
}, {
    character: "ニ",
    phonetic: "ni"
}, {
    character: "ヒ",
    phonetic: "hi"
}, {
    character: "ミ",
    phonetic: "mi"
}, {
    character: "リ",
    phonetic: "ri"
}, {
    character: "ウ",
    phonetic: "u"
}, {
    character: "ク",
    phonetic: "ku"
}, {
    character: "ス",
    phonetic: "su"
}, {
    character: "ツ",
    phonetic: "tsu"
}, {
    character: "ヌ",
    phonetic: "nu"
}, {
    character: "フ",
    phonetic: "fu"
}, {
    character: "ム",
    phonetic: "mu"
}, {
    character: "ユ",
    phonetic: "yu"
}, {
    character: "ル",
    phonetic: "ru"
}, {
    character: "エ",
    phonetic: "e"
}, {
    character: "ケ",
    phonetic: "ke"
}, {
    character: "セ",
    phonetic: "se"
}, {
    character: "テ",
    phonetic: "te"
}, {
    character: "ネ",
    phonetic: "ne"
}, {
    character: "ヘ",
    phonetic: "he"
}, {
    character: "メ",
    phonetic: "me"
}, {
    character: "レ",
    phonetic: "re"
}, {
    character: "オ",
    phonetic: "o"
}, {
    character: "コ",
    phonetic: "ko"
}, {
    character: "ソ",
    phonetic: "so"
}, {
    character: "ト",
    phonetic: "to"
}, {
    character: "ノ",
    phonetic: "no"
}, {
    character: "ホ",
    phonetic: "ho"
}, {
    character: "モ",
    phonetic: "mo"
}, {
    character: "ヨ",
    phonetic: "yo"
}, {
    character: "ロ",
    phonetic: "ro"
}, {
    character: "ン",
    phonetic: "n"
}]

// Katakana: Start game function
function runKatakanaGame() {
    katakanaScore = 0;
    katakanaQuestionCounter = 0;
    availableKatakanaQuestions = [...katakana];
    newKatakanaQuestion();
}

// Katakana: New random question function
function newKatakanaQuestion() {
    // If 10 questions have been asked, display unique message depending on score
    // Restart game or go back to the homepage depending on button press
    if (katakanaQuestionCounter >= maxQuestions) {
        if (katakanaScore = 10) {
            Swal.fire({
                title: "You scored 10/10!",
                html: "Amazing! You have excellent knowledge of katakana, and you should be proud of yourself!<br>Would you like to play again?",
                allowEscapeKey: false,
                allowEnterKey: false,
                allowOutsideClick: false,
                confirmButtonText: '<a href="katakana.html">Play Again!</a>',
                showDenyButton: true,
                denyButtonText: '<a href="index.html">Choose a Different Game</a>',
            })
        } else if (katakanaScore < 10 && katakanaScore >= 7) {
            Swal.fire({
                title: `You scored ${katakanaScore}/10!`,
                html: "Well done! You have good knowledge of katakana! Keep practising and you will be confident in no time.<br>Would you like to play again?",
                allowEscapeKey: false,
                allowEnterKey: false,
                allowOutsideClick: false,
                confirmButtonText: '<a href="katakana.html">Play Again!</a>',
                showDenyButton: true,
                denyButtonText: '<a href="index.html">Choose a Different Game</a>',
            })
        } else if (katakanaScore < 7 && katakanaScore >= 4) {
            Swal.fire({
                title: `You scored ${katakanaScore}/10!`,
                html: "Keep trying! You have some knowledge of katakana, and with practise your knowledge will surely grow!<br>Would you like to play again?",
                allowEscapeKey: false,
                allowEnterKey: false,
                allowOutsideClick: false,
                confirmButtonText: '<a href="katakana.html">Play Again!</a>',
                showDenyButton: true,
                denyButtonText: '<a href="index.html">Choose a Different Game</a>',
            })
        } else if (katakanaScore < 4 && katakanaScore >= 1) {
            Swal.fire({
                title: `You scored ${katakanaScore}/10!`,
                html: "Don't give up! Practise makes perfect, so keep trying and your knowledge will surely grow!<br>Would you like to play again?",
                allowEscapeKey: false,
                allowEnterKey: false,
                allowOutsideClick: false,
                confirmButtonText: '<a href="katakana.html">Play Again!</a>',
                showDenyButton: true,
                denyButtonText: '<a href="index.html">Choose a Different Game</a>',
            })
        } else if (katakanaScore = 0) {
            Swal.fire({
                title: `You scored ${katakanaScore}/10 :(`,
                html: "Oh no! Unfortunately you didn't get any questions right this time, but don't give up trying - practise makes perfect!<br>Would you like to play again?",
                allowEscapeKey: false,
                allowEnterKey: false,
                allowOutsideClick: false,
                confirmButtonText: '<a href="katakana.html">Play Again!</a>',
                showDenyButton: true,
                denyButtonText: '<a href="index.html">Choose a Different Game</a>',
            })
        }
    }

    // Increase the question counter by 1 each time
    katakanaQuestionCounter++;

    // Pick a random katakana and display the character as the question
    const katakanaQuestionIndex = Math.floor(Math.random() * availableKatakanaQuestions.length);
    currentKatakanaQuestion = availableKatakanaQuestions[katakanaQuestionIndex];
    katakanaQuestion.innerText = currentKatakanaQuestion.character;

    // Take the phonetic of the current katakana and pick 3 others from the list at random
    const katakanaAnswers = [currentKatakanaQuestion];
    while (katakanaAnswers.length < 4) {
        let randomKatakanaIndex = Math.floor(Math.random() * katakana.length);
        if (!katakanaAnswers.some((answer) => answer === katakana[randomKatakanaIndex])) {
            katakanaAnswers.push(katakana[randomKatakanaIndex]);
        }
    }

    // Shuffle the 4 potential answers to each question
    function katakanaShuffle() {
        let j = (katakanaAnswers.length);
        while (--j > 0) {
            let temp = Math.floor(Math.random() * (j + 1));
            [katakanaAnswers[temp], katakanaAnswers[j]] = [katakanaAnswers[j], katakanaAnswers[temp]];
        }
        return katakanaAnswers;
    }

    katakanaShuffle();

    // Display the shuffled potential answers
    let i = 0;

    for (let button of buttons) {
        button.innerText = katakanaAnswers[i].phonetic;
        i++;
    }

    // Splice the current question out of the array so it doesn't appear twice
    availableKatakanaQuestions.splice(katakanaQuestionIndex, 0);

    // Once everything has loaded, allow answers
    acceptingAnswers = true;
}

// Katakana: Listen for click & check answer, display new question
for (let button of buttons) {
    button.addEventListener("click", function (event) {

        if (!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedAnswer = event.target;

        if (selectedAnswer.innerText === currentKatakanaQuestion.phonetic) {
            // If answer is correct, increase score + green background
            katakanaScore++;
            currentScore.innerText = [katakanaScore];
            this.classList.add("correct");
        } else {
            // If incorrect, red background
            this.classList.add("incorrect");
        }

        // Remove temporary classes with red/green backgrounds, set a short timeout before loading next question
        setTimeout(() => {
            selectedAnswer.classList.remove("correct", "incorrect");
            newKatakanaQuestion();
        }, 500);
    });
}