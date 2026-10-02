const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    {
        question: "What does typeof do in JavaScript?",
        options : ["A. Converts a value",
                "B. Checks the data type of a value",
                "C. Creates a variable",
                "D. Deletes a variable"],
        answer : "B"
    },
    {
        question : "Which keyword is used to declare a variable whose value can be changed?",

        options :   ["A. const",
                    "B. fixed",
                    "C. let",
                    "D. static"],

        answer: "C"
    },
    {
       question:"Which of the following is a JavaScript primitive data type?",
       options :["A. Array",
                "B. Object",
                "C. String",
               "D. Function"],
       answer:"c"
    },
    {
        question :"What is the index of the first element in a JavaScript array?",
        options: ["A. 0",
                "B. 1",
                "C. -1",
                "D. 2"],
        answer :"A"

    },
    {
        question: "What is the capital of India?",
        options: ["A. Mumbai", "B. New Delhi", "C. Kolkata", "D. Chennai"],
        answer: "B"
    },

    {
        question: "Which is the largest planet in our Solar System?",
        options: ["A. Earth", "B. Mars", "C. Jupiter", "D. Saturn"],
        answer: "C"
    },

    {
        question: "Who is known as the Father of the Indian Constitution?",
        options: ["A. Mahatma Gandhi", "B. Jawaharlal Nehru", "C. B. R. Ambedkar", "D. Sardar Patel"],
        answer: "C"
    },

    {
        question: "Which is the longest river in India?",
        options: ["A. Yamuna", "B. Ganga", "C. Godavari", "D. Narmada"],
        answer: "B"
    },

    {
        question: "Which planet is known as the Red Planet?",
        options: ["A. Venus", "B. Mars", "C. Jupiter", "D. Mercury"],
        answer: "B"
    },

    {
        question: "How many continents are there in the world?",
        options: ["A. 5", "B. 6", "C. 7", "D. 8"],
        answer: "C"
    },

    {
        question: "Which is the largest ocean in the world?",
        options: ["A. Atlantic Ocean", "B. Indian Ocean", "C. Arctic Ocean", "D. Pacific Ocean"],
        answer: "D"
    },

    {
        question: "Who was the first Prime Minister of India?",
        options: ["A. Sardar Patel", "B. Jawaharlal Nehru", "C. Rajendra Prasad", "D. Lal Bahadur Shastri"],
        answer: "B"
    },

    {
        question: "Which gas do plants mainly absorb from the atmosphere for photosynthesis?",
        options: ["A. Oxygen", "B. Nitrogen", "C. Carbon dioxide", "D. Hydrogen"],
        answer: "C"
    },

    {
        question: "Which is the smallest continent by land area?",
        options: ["A. Europe", "B. Australia", "C. Antarctica", "D. South America"],
        answer: "B"
    }
]
let score = 0;
let currentQuestion = 0;

function askQuestion() {

    const q = questions[currentQuestion];

    console.log(`\nQuestion ${currentQuestion + 1}: ${q.question}`);

    for (let i = 0; i < q.options.length; i++) {
        console.log(q.options[i]);
    }

    rl.question("Enter your answer (A, B, C, or D): ", (userAnswer) => {

        userAnswer = userAnswer.trim().toUpperCase();

        if (userAnswer === q.answer) {
            console.log("Correct! ✅");
            score++;
        } else {
            console.log("Wrong! ❌");
            console.log(`Correct answer: ${q.answer}`);
        }

        currentQuestion++;

        if (currentQuestion >= questions.length) {
        console.log("\n===== QUIZ COMPLETE =====");
        console.log(`Your Score: ${score}/${questions.length}`);

        rl.close();
        return;
    }


        askQuestion();
    });
}

console.log("===== WELCOME TO THE QUIZ =====");

askQuestion();
