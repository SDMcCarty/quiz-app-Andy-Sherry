'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is a group of geese called?',
      answers: [
        'a giggle',
        'a gaggle',
        'a google',
        'a goggle'
      ],
      correctAnswer: 'a gaggle'
    },
    {
      question: 'What is a group of bunnies called?',
      answers: [
        'a fluffle',
        'a fluffy',
        'a floofle',
        'a falafle'
      ],
      correctAnswer: 'a fluffle'
    },
    {
      question: 'What is a group of penguins called?',
      answers: [
        'a wiggle',
        'a waggle',
        'a waddle',
        'a woggle'
      ],
      correctAnswer: 'a waddle'
    },
    {
      question: 'What is a group of rhinos called?',
      answers: [
        'a smash',
        'a crash',
        'a crush',
        'a smoosh'
      ],
      correctAnswer: 'a crash'
    },
    {
      question: 'What is a group of hedgehogs called?',
      answers: [
        'an array',
        'a float',
        'a string',
        'a boolean'
      ],
      correctAnswer: 'an array'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  hasAnswered: 0,
  isCorrect: true
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function generateStartPageHtml(){
  return `<p>Many animals have interesting named groups. Join our gang (elk), and see how many you know!</p>
  <button type="button" class="start-button">Flock to the test</button>
  `;
}

//keeps track of score
function scoreTracker() {
  return `<div class="score-tracker">Score ${store.score} out of ${store.questions.length}</div>`;
}

//generates an answer array and HTML
function generateAnswers() {
  const ansArr = store.questions[store.questionNumber].answers;
  let answerHtml = '';
  let i = 0;

  ansArr.forEach(answer => {
    answerHtml += 
    `<input id="answer${i + 1}" type="radio" name="answer" value="${answer}" tabindex="${i + 1}" required/><label for="answer${i + 1}">${answer}</label>`;
    i++;
  });
  return answerHtml;
}

//generates the question
function generateQuestionPageHtml(){
  let currentQuestion = store.questions[store.questionNumber];
  return `<div class="question-number">Question ${store.questionNumber + 1} of ${store.questions.length}</div>
  <form id="quiz-form">
    <legend class="question">${currentQuestion.question}</legend>
    ${generateAnswers()}
    <button type="submit" class="submit-button">Brace for the answer</button>
  </form>
  ${scoreTracker()}`;

}

function generateAnswerPageHtml(){
  const answersArray = store.questions[store.questionNumber].answers;
  console.log(`store.isCorrect is ${store.isCorrect}`);
  let resultDisplay = '';
  if (store.isCorrect === true) {
    resultDisplay = 'Correct!';
  }
  else {
    resultDisplay = 'Incorrect!';
  }
  
  return ` 
  <section class="result-display">
    <p>${resultDisplay}</p>
    <p class="correct-answer"> It's ${store.questions[store.questionNumber].correctAnswer}.</p>
    <p class="score-display score-tracker">${scoreTracker()}</p>
    <button type="button" class="next-button">Run to the next question</button> 
  </section>`;

//if isCorrect = true 
//  generate CORRECT!
// let congratMessage = Correct
//if isCorrect != true
//  generate INCORRECT
// let congratMessage = Incorrect
// $(congratMessage)
// store.correctAnswer printed
// generateScore -> GLOBAL score
// `${score}/${queestionNumber}`
// render

}

function generateResultsPageHtml(){
  return `<p> Hello World! </p>`;
}

// this function should reset the quiz
function resetQuiz() {
  console.log('`resetQuiz` ran');
  store.quizStarted = false;
  store.questionNumber = 0;
  store.score = 0;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuizApp() {
  console.log('`renderQuizApp` ran');
  let quizHtml = ''
  console.log(store.hasAnswered, store.questionNumber);
  if (store.quizStarted === false) {
    $('main').html(generateStartPageHtml);
    //handleStartButton();
  }
  else if (store.hasAnswered > store.questionNumber) {
    $('main').html(generateAnswerPageHtml);
  }
  else if (store.quizStarted === true && store.questionNumber < store.questions.length) {
    $('main').html(generateQuestionPageHtml);
  }
  else {
    $('main').html(generateResultsPageHtml);
  }
}
// startPg -> if quizStarted = false
// => click START
// => questionPg -> if quizStart = true && questionNumber < store.questions.length
// => click SUBMIT
// => answerPg -> hasAnswered === questionNumber 
// => click NEXT
// => questionPg -> same as above until all quest. asnwered
// => click NEXT
// => feedbackPg (final result page) -> else statement
// => click RESTART
// => JS reset and back to startPg

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//   When the user submits the form,
//   Check what answer they picked
//   And tell them if they're correct

//initializes quiz and updates quizStarted var
function handleStartButton() {
  $('main').on('click', '.start-button', event => {
    console.log('`handleStartButton` ran');
    event.preventDefault();
    store.quizStarted = true;
    renderQuizApp();
  });
}

// this function will be responsible for when users interact with the "submit" button to submit their 
// answer to each question of the quiz. This takes you to the answer page every time. 
function handleSubmitButton() {
  $('main').on('submit', '#quiz-form', event => {
    console.log('`handleSubmitButton` ran');
    event.preventDefault();
    const userAnswer = $('input[name="answer"]:checked').val();
    console.log(userAnswer);
    checkAnswer(userAnswer);
  });
  //move to answer pg
  //which question came from to display corresponding ans
  //call checkAnswer
}

// this function will be responsible for verifying if the user selected the correct answer choice. 
function checkAnswer(userAnswer) {
  console.log('`checkAnswer` ran');
  console.log(userAnswer);
  console.log(store.questions[store.questionNumber].correctAnswer);
  if(userAnswer === store.questions[store.questionNumber].correctAnswer) {
    store.isCorrect = true;
    store.score++;
    console.log('`checkAnswer` true');
  } 
  else {
    store.isCorrect = false;
    console.log('`checkAnswer` false');
  }
  store.hasAnswered++;
  renderQuizApp();

  //know what question -> ans selected
  //check to see ans correct
  //arr{obj -> ans: [arr]}
  //store.answers[0, 1, 2, 3]
  //when called, render generateAnswerPageHtml()
}

// this function will be responsible for when users interact with the "next quesdtion" button to proceed to the
// next quiz question. This will always take you to a question unless you are done with the quiz. 
function handleNextButton() {
  console.log('`handleNextButton` ran');
  $('main').on('click', '.next-button', event => {
    event.preventDefault();
    store.questionNumber++;
    //store.hasAnswered++;
    renderQuizApp();
  });
}

// this function will be responsible for when users interact with the "restart quiz" button to start
// the quiz over again. We will need a JS reset not a page reload. 
function handleRestartButton() {
  console.log('`handleRestartButton` ran');
  $('main').on('click', '.restart-button', event => {
    event.preventDefault();
    resetQuiz();
    renderQuizApp();
  });
}



// this function will be our callback when the page loads. it's responsible for
// initially rendering the Quiz App, and activating our individual template generate functions
// that change the HTML on the DOM depending on the current state. verify the user's answer choice and user interaction with the "submit answer", "next question" and "quiz restart" buttons.
function handleQuizApp() {
  renderQuizApp();
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}

// when the page loads, call `handleQuizApp`
$(handleQuizApp);
