const questions = [
  {
    question: "Which language is used to style a web page?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
    answer: "CSS"
  },

  {
    question: "Which language is used to add interactivity to a web page?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ],
    answer: "JavaScript"
  },

  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },

  {
    question: "Which HTML tag is used to create a paragraph?",
    options: [
      "<h1>",
      "<p>",
      "<div>",
      "<span>"
    ],
    answer: "<p>"
  },

  {
    question: "Which method is used to select an element by its ID?",
    options: [
      "querySelector()",
      "getElementById()",
      "getElement()",
      "selectById()"
    ],
    answer: "getElementById()"
  },

  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      "variable",
      "let",
      "define",
      "varName"
    ],
    answer: "let"
  },

  {
    question: "Which method adds an item to the end of an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "add()"
    ],
    answer: "push()"
  },

  {
    question: "Which symbol is used for a single-line comment in JavaScript?",
    options: [
      "<!-- -->",
      "//",
      "/* */",
      "#"
    ],
    answer: "//"
  },

  {
    question: "Which event occurs when a user clicks an element?",
    options: [
      "hover",
      "change",
      "click",
      "submit"
    ],
    answer: "click"
  },

  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
      "JSON.toObject()"
    ],
    answer: "JSON.parse()"
  }
];
const questionElement = document.querySelector(".question");
const optionbtn = document.querySelectorAll(".option");
const nextQues = document.querySelector(".next-btn");
const score = document.querySelector(".score");

let currentQues = 0;
function displayQuestion(){
    
    questionElement.textContent = questions[currentQues].question;
    const options = questions[currentQues].options;

    optionbtn.forEach((btn, index) => {
        btn.textContent = options[index];

    btn.addEventListener('click' , function(){
    const selcetedAns = btn.textContent; 
    const correctAns = questions[currentQues].answer;

    if(selcetedAns == correctAns){
        console.log("Correct");
    } else {
    console.log("Wrong");
    }
    
    optionbtn.forEach((button) => {
                button.disabled = true;
        });
    });

});

}
displayQuestion();






