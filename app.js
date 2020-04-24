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