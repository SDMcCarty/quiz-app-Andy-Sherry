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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//   When the user submits the form,
//   Check what answer they picked
//   And tell them if they're correct


// this function will be responsible for rendering the quiz app in it's current state
// to the DOM
function renderQuizApp() {

  console.log('`renderQuizApp` ran');
  const x = ''
  //insert HTML into the DOM
  $('#.class-or-id-goes-here').html(const from above?);
}

// this function will be responsible for when users interact with the "submit" button to submit their 
// answer to each question of the quiz.
function handleSubmitButton() {

  console.log('`handleSubmitButton` ran');
}

// this function will be responsible for verifying if the user selected the correct answer choice. 
function verifyAnswerChoice() {

  console.log('`verifyAnswerChoice` ran');
}

// this function will be responsible for displaying a text description of the correct answer once the user has
// submitted their answer to the quiz question. **Not sure this is necessary because renderQuizApp() may do this
// already once the users hits submit?**
function displayAnswerFeedback() {

  console.log('`displayAnswerFeedback` ran');
}

// this function will be responsible for when users interact with the "next question" button to proceed to the
// next quiz question.
function handleNextButton() {

  console.log('`handleNextButton` ran');
}

// this function will be responsible for when users interact with the "restart quiz" button to start
// the quiz over again.
function handleRestartButton() {

  console.log('`handleRestartButton` ran');
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the Quiz App, and activating our individual functions
// that verify the user's answer choice and user interaction with the "submit answer" and "quiz restart" buttons.
function handleQuizApp() {
  renderQuizApp();
  handleSubmitButton();
  verifyAnswerChoice();
  displayAnswerFeedback();
  handleNextButton();
  handleRestartButton();
}

// when the page loads, call `handleQuizApp`
$(handleQuizApp);