// Wait for page to finish loading

document.addEventListener("DOMContentLoaded", function () {
    runHiraganaGame();
});

// Hiragana: Declarations
const hiraganaQuestion = document.getElementById("hiragana-question");
const hiraganaChoices = Array.from(document.getElementsByClassName("hiragana-answer"));


let currentHiraganaQuestion = {};
let hiraganaScore = 0;
let hiraganaQuestionCounter = 0;
let availableHiraganaQuestions = [];

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

const MAX_QUESTIONS = 10;

// Hiragana: Start game function
function runHiraganaGame() {
    hiraganaScore = 0;
    hiraganaQuestionCounter = 0;
    availableHiraganaQuestions = [...hiragana];
    newHiraganaQuestion();
}

// Hiragana: New random question function
function newHiraganaQuestion() {
    hiraganaQuestionCounter++;
    hiraganaShuffle();

    // Pick a random hiragana and display the character as the question
    const hiraganaQuestionIndex = Math.floor(Math.random() * availableHiraganaQuestions.length);
    currentHiraganaQuestion = availableHiraganaQuestions[hiraganaQuestionIndex];
    hiraganaQuestion.innerText = currentHiraganaQuestion.character;

    // Take the phonetic of the current hiragana and pick 3 others from the list at random
    const hiraganaAnswers = [currentHiraganaQuestion.phonetic];
    while (hiraganaAnswers.length < 4) {
        let randomHiraganaIndex = Math.floor(Math.random() * hiragana.length);
        if (!hiraganaAnswers.some((answer) => answer === hiragana[randomHiraganaIndex])) {
            hiraganaAnswers.push(hiragana[randomHiraganaIndex]);
        }
    }

    console.log(hiraganaAnswers);

    // let i = 0;

    // for (let button of buttons) {
    //     button
    // }

    // for (let button of buttons) {
    //     button.addEventListener("click", function () {
    //         if (button.innerText === currentHiraganaQuestion.phonetic) {

    //         }
    //     })
    // }

    // availableHiraganaQuestions.splice(hiraganaQuestionIndex, 0);

}

// Hiragana: Shuffle array & display 4 choices function:
// Start with another empty array?
// Max 4 [0-3], shuffle before displaying 
function hiraganaShuffle() {

}

// Hiragana: User clicks answer

// Hiragana: Check the answer

// Hiragana: If correct, answer turns green and increases correct score

// Hiragana: If incorrect, answer turns red and increases incorrect score

// Hiragana: Display next question (up to 10?)

// Hiragana: After final question, display final score with message depending on score

// Hiragana: Restart the game

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