// JS file for Feb 9 class demo
// A guessing game about you with 5 questions for the user, and a different response to the user depending upon if they got the right or wrong answer.




var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);
alert('Hi there, ' + userName + ', I hope you read carefully, because I\'m going to ask you some questions about me. Answer with Y or N.');

var yesNo = 'You should have given a Y or N answer.'; //dry improper answer format.

var answer1 = prompt('Is my name Keri?').toLowerCase();
console.log('answer1 correct answer was n or no, and user answered: ' + answer1);

if (answer1 ==='y' || answer1 ==='yes' ){
  alert('Sorry ' + userName + '. That was a trick question. It\'s Carrie not Keri');
} else if(answer1 === 'n' || answer1 ==='no'){
  alert('You got it right! Carrie is my name.');

} else {
  alert(yesNo);
}

var answer2 = prompt('Are all of my pets named after physicists?').toLowerCase();
console.log('answer2 correct answer was y or yes, and user answered: ' + answer2);

if(answer2 === 'y' || answer2 === 'yes'){
  alert('You got it right ' + userName + '! Feynman, Maxwell, Doppler and Planck');
} else if(answer2 === 'n' || answer2 === 'no'){
  alert('Wrong ' + userName + '! They are named after physicists!')
} else {
  alert(yesNo);
}

var answer3 = prompt('Did I dress up as Troy (from Startrek) for a murder mystery party?').toLowerCase();
console.log('answer3 correct answer was n or no, and user answered: ' + answer3);

if(answer3 === 'y' || answer3 ==='yes'){
  alert('Wrong, who would ever want to be Troy.')
} else if(answer3 === 'n' || answer3 === 'no'){
  alert('Congratulations ' + userName + ', You got it right. I was Guinan.')
} else {
  alert(yesNo);
}

var answer4 = prompt('Do I have a college degree?').toLowerCase();
console.log('answer4 correct answer was n or no, and user answered: ' +answer4);

if(answer4 === 'y' || answer4 === 'yes'){
  alert('Awww ' + userName + '. It\'s nice you think that, but you are wrong!' )
} else if(answer4 ==='n' || answer4 === 'no'){
  alert('It\'s true, I never completed my student teaching.');
} else {
  alert(yesNo);
}

var answer5 = prompt('Do I want to own a lakehouse?').toLowerCase();
console.log('answer5 correct answer was y or yes, and user answered: ' +answer5);

if(answer5 === 'y' || answer5 === 'yes') {
  alert(userName + ' can come hang at my future lake place.');
} else if(answer5 === 'n' || answer5 === 'no'){
  alert(userName + ', I\'m disappointed in you. Who doesn\'t want a lake place?')
} else {
  alert(yesNo);
}
