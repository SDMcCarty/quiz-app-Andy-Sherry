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
        'A giggle',
        'A gaggle',
        'A google',
        'A goggle'
      ],
      correctAnswer: 'A gaggle'
    },
    {
      question: 'What is a group of bunnies called?',
      answers: [
        'A fluffle',
        'A fluffy',
        'A floofle',
        'A falafle'
      ],
      correctAnswer: 'A fluffle'
    },
    {
      question: 'What is a group of penguins called?',
      answers: [
        'A wiggle',
        'A waggle',
        'A waddle',
        'A woggle'
      ],
      correctAnswer: 'A waddle'
    },
    {
      question: 'What is a group of rhinos called?',
      answers: [
        'A smash',
        'A crash',
        'A crush',
        'A smoosh'
      ],
      correctAnswer: 'A crash'
    },
    {
      question: 'What is a group of hedgehogs called?',
      answers: [
        'An array',
        'A float',
        'A string',
        'A boolean'
      ],
      correctAnswer: 'An array'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
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
  return `<div class="score-tracker">Score $(store.score) out of $(store.questions.length)</div>`;
}

//generates an answer array and HTML
function generateAnswers() {
  const ansArr = store.questions[store.questionNumber].answers;
  let answerHtml = '';
  let i = 0;

  ansArr.forEach(answer => {
    answerHtml += 
    `<input id="answer$(i + 1)" type="radio" name="answer" value="$(answer)" tabindex="$(i + 1)" required/><label for="answer$(i + 1">$(answer)</label>`;
    i++;
  });
  return answerHtml;
}

//generates the question
function generateQuestionPageHtml(){
  let currentQuestion = store.questions[store.questionNumber];
  return `<div class="question-number">Question $(store.questionNumber + 1) of $(store.questions.length)</div>
  <form id="quiz-form" action="" method="post">
    <legend class="question">$(questionNumber.question)</legend>
    $(generateAnswers())
    <button type="submit" class="submit-button">Brace for the answer</button>
  </form>
  $(scoreTracker)`;

}

function generateAnswerPageHtml(isCorrect){
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

}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuizApp() {
  console.log('`renderQuizApp` ran');
  let quizHtml = ''
  if (quizStarted === false) {
    $('main').html(generateStartPageHtml);
  }
  else if () {
    $('main').html(generateQuestionHtml);
  }

  else() {
    $('main').html(generateQuestionHtml);
  }
  
  $('main').html();
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//   When the user submits the form,
//   Check what answer they picked
//   And tell them if they're correct

// this function will be responsible for when users interact with the "submit" button to submit their 
// answer to each question of the quiz. This takes you to the answer page every time. 
function handleSubmitButton() {
  //.on submit
  $('main').on('submit', 'submit-button', event =>
  event.preventDefault();
  console.log('`handleSubmitButton` ran');
  const userAnswer =$('input[name="answer"].checked').val();
  console.log(userAnswer);
  checkAnswer();
  //move to answer pg
  //which question came from to display corresponding ans
  //call checkAnswer
  )
  
}

// this function will be responsible for verifying if the user selected the correct answer choice. 
function checkAnswer(userAnswer) {
  console.log('`checkAnswer` ran');
  if(userAnswer === store.correctAnswer) {
    let isCorrect = true;
    score++;
    console.log('`checkAnswer` true');
  } else {
    let isCorrect = false;
    console.log('`checkAnswer` false');
  }
  const answerNumber = store.questionNumber;
  store.questionNumber++;
  generateAnswerPageHtml();
  //know what question -> ans selected
  //check to see ans correct
  //arr{obj -> ans: [arr]}
  //store.answers[0, 1, 2, 3]
  //when called, render generateAnswerPageHtml()
}

//initializes quiz and updates quizStarted var
function handleStartButton() {
  event.preventDefault();
  console.log('`handleStartButton` ran');
  store.quizStarted = true;
  generateQuestionPageHtml();
}
// this function will be responsible for when users interact with the "start" and "next quesdtion" button to proceed to the
// next quiz question. This will always take you to a question unless you are done with the quiz. 
function handleNextButton() {
  //.on click
  //event.preventDefault();
  console.log('`handleNextButton` ran');
}

// this function will be responsible for when users interact with the "restart quiz" button to start
// the quiz over again. We will need a JS reset not a page reload. 
function handleRestartButton() {
  //.on click
  //event.preventDefault();
  console.log('`handleRestartButton` ran');
  resetQuiz();
}

// this function should reset the quiz
function resetQuiz() {
  console.log('`resetQuiz` ran');
  // quizStarted: false,
  // questionNumber: 0,
  // score: 0
  renderQuizApp();
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the Quiz App, and activating our individual template generate functions
// that change the HTML on the DOM depending on the current state. verify the user's answer choice and user interaction with the "submit answer", "next question" and "quiz restart" buttons.
function handleQuizApp() {
  renderQuizApp();
  handleSubmitButton();
  checkAnswer();
  
}

// when the page loads, call `handleQuizApp`
$(handleQuizApp);
