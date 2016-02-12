// JS file for Feb 9 class demo
// A guessing game about you with 5 questions for the user, and a different response to the user depending upon if they got the right or wrong answer.

var yesNo = 'You should have given a Y or N answer.'; //dry improper answer format.
var tally = 0; // I'll be using this to tally number of correct answers at the end.

var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);
alert('Hi there, ' + userName + ', I hope you read carefully, because I\'m going to ask you some questions about me. Answer with Y or N.');

var questionArray = [
  //Question 1
  [
    'Is my name Keri?', //[0][1]
    'answer1 correct answer was n or no, and user answered: ', //[0][2]
    [
      [
        'Sorry ' + userName + '. That was a trick question. It\'s Carrie not Keri', //[0][2][0][0]
        false //[0][2][1][1]
      ],
      [
        'You got it right! Carrie is my name.', //[0][2][1][0]
        true //[0][2][1][1]
      ],
    ]
  ],
  //Question 2
  [
    'Are all of my pets named after physicists?',
    'Answer2 correct answer was y or yes, and user answered: ',
    [
      [
        'You got it right ' + userName + '! Feynman, Maxwell, Doppler and Planck',
        true
      ],
      [
        'Wrong ' + userName + '! They are named after physicists!',
        false
      ],

    ]
  ],
  //Question 3
  [
    'Did I dress up as Troy (from Startrek) for a murder mystery party?',
    'answer3 correct answer was n or no, and user answered: ',
    [
      [
        'Wrong, who would ever want to be Troy.',
        false
      ],
      [
        'Congratulations ' + userName + ', You got it right. I was Guinan.',
        true
      ],

    ]
  ],
  //Question 4
  [
    'Do I have a college degree?',
    'answer4 correct answer was n or no, and user answered: ',
    [
      [
        'Awww ' + userName + '. It\'s nice you think that, but you are wrong!',
        false
      ],
      [
        'It\'s true, I never completed my student teaching.',
        true
      ],

    ]
  ],
  //Question 5
  [
    'Do I want to own a lakehouse?',
    'answer5 correct answer was y or yes, and user answered: ',
    [
      [
        userName + ' can come hang at my future lake place.',
        true
      ],
      [
        userName + ', I\'m disappointed in you. Who doesn\'t want a lake place?',
        false
      ],

    ]
  ]
];

for (i = 0; i < questionArray.length; i++) {
  var answer = prompt(questionArray[i][0]).toLowerCase();
  console.log(questionArray[i][1] + answer);

  function res1 (answer){


    if (answer === 'y' || answer === 'yes') {
      alert(questionArray[i][2][0][0]);
      if(questionArray[i][2][0][1]) {
        tally++;
      }
    } else if (answer === 'n' || answer === 'no'){
      alert(questionArray[i][2][1][0]);
      if(questionArray[i][2][1][1]) {
        tally++;
      }
    } else {
      alert(yesNo);
    }
  };
  res1 (answer);
}

//while loop to evaluate if answer is 4
var numberGuesses = 0;
while(answer6 !== 4 && numberGuesses < 4) {
  var answer6 =  parseInt(prompt('How many pets do I have?', 'Must be a number'));
  console.log('answer6 correct answer is 4: ' + answer6);

  function res2 (answer6){

    if (isNaN(answer6)){
      alert('That is not a number. Guess again this time use a number.');
      numberGuesses++;
    } else if(answer6 === 4) {
      alert('Correct! I have ' + answer6 + ' pets!');
      tally++;
      console.log('great should be done.');
    } else if(answer6 < 4) {
      alert('I have more pets than ' + answer6 + '. Guess again.');
      numberGuesses++;
    } else if(answer6 > 4) {
      alert('I have fewer pets than ' + answer6 + '. Guess again.');
      numberGuesses++;
    } else {
      alert('I don\'t know what happened');
      numberGuesses++;
    }
  };
  res2 (answer6);
}
if (numberGuesses === 4) {
  alert('You\'ve had too many guesses. The answer is 4. Let\'s move on to the next question')
}

// stretch question 7 - check array for pet name
var answer7 = prompt('What is a name of one of my pets?').toLowerCase();
console.log('answer7 correct answers are feynman, doppler, maxwell, planck. The user answered: ' + answer7);
var petNames = ['feynman', 'doppler', 'maxwell', 'planck'];

function res3(answer7){
  for (i=0; i < petNames.length; i++) {
    if(petNames[i] === answer7) {
      var rightPet = true;
      tally++
      break;
    }
  }
  if(rightPet) {
    alert('Yep, ' + answer7 + ' is one of my pets.');
  } else {
    alert('wrong name');
  }
};
res3(answer7);

function res4(){
  if (tally > 4) {
    alert('You got ' + tally + ' out of 7 questions correct, ' + userName + '! Good job!');
  } else {
    alert('You got ' + tally + ' out of 7 questions correct, ' + userName + '. Better luck next time.');
  }
};
res4();
