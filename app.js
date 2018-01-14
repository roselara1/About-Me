'use strict';

var userPoints = 0;

alert('Welcome to My Guessing Game!');

var user = prompt('What is your name?');

alert('Hi ' + user + ', I\'m so glad you want to play my game to get to know me!');

// //Question 1 is below

var answer = prompt('Do you think Ana has any pets? ' , 'type yes or no').toLowerCase();

console.log(answer);

if (answer === 'no' || answer === 'n') {
  //if its correct give them a point
  userPoints++; //If the answer is no, they're going to get a point
} else {
  //if its not correct, tell them to try again
  alert('Sorry, but I don\'t have any pets! My landlord won\'t allow it. Please try again.');

}

alert(' You have ' + userPoints + ' points.');

// //Question 2 is below

var onlyChild = prompt('Is Ana an only child? ' , 'type yes or no').toLowerCase();

console.log(onlyChild);

if (onlyChild === 'no' || onlyChild === 'n') {
  //if its correct give them a point
  userPoints++; //If the answer is no, they're going to get a point
} else {
  //if its not correct, tell them to try again
  alert('Sorry, thats wrong! Ana has an older brother and two younger sisters. Please try again.');

}
alert(' You have ' + userPoints + ' points.');

// //Question 3 is below

var anaDrive = prompt('Do you think Ana knows how to drive?' , 'type yes or no').toLowerCase();

console.log(anaDrive);

if (anaDrive === 'yes' || anaDrive === 'y') {
  //if its correct give them a point
  userPoints++; //If the answer is yes, they're going to get a point
} else {
  //if its not correct, tell them to try again
  alert('Wrong again! ..but I do hate to drive so I avoid it as much as I can. Please try again!');

}
alert(' You have ' + userPoints + ' points.');

// //Question 4 is below

var gameOfThrones = prompt(' Do you think Ana likes Game of Thrones?' , 'type yes or no').toLowerCase();

console.log(gameOfThrones);

if (gameOfThrones === 'no' || gameOfThrones === 'n') {
  //if its correct give them a point
  userPoints++; //If the answer is no, they're going to get a point
} else {
  //if its not correct, tell them to try again
  alert('Sorry, but I have never seen an episode of that show.. Try again! :(');

}
alert(' You have ' + userPoints + ' points.');



// //Question 5 is below
var otherLanguage = prompt(' Do you think Ana can speak any languages other than English?' , 'type yes or no').toLowerCase();

console.log(otherLanguage);

if (otherLanguage === 'yes' || otherLanguage === 'y') {
  //if its correct give them a point
  userPoints++; //If the answer is yes, they're going to get a point
} else {
  //if its not correct, tell them to try again
  alert('Wrong, Ana knows how to speak Spanish.');

}
alert(' You have ' + userPoints + ' points.');



//Question 6 is below


var anasAge = 24;

for (var i = 3; i >=0; i--) {
  var guess = prompt('How old do you think Ana is?');

  if(guess > anasAge) { //if user guesses a number greater than anasAge, then they will get the alert displayed below. They will also have one less attempt everytime they guess incorrectly(total of 4 attempts)
    alert('You guessed too HIGH! Lets guess again. Only ' + i + ' tries left.');
  }
  if (guess < anasAge) { //if the user guesses a number greater than anasAge, the they will get the alert displayed below. They will also have one less attempt everytime they guess incorrectly(total of 4 attempts)
    alert('You guessed too LOW! only '+ i + ' guesses left. Please try again.');
  }

  if (guess === '24') { // if the user guesses 24, then they guess correctly and they will get the alert displayed below and a point.
    alert('Yes! You are correct! I am 24 years old');
    userPoints++;

    break;
  }

}

alert(' You have ' + userPoints + ' points.');


//Question 7 is below



var showsILike = [ 'the office', 'dexter', 'stranger things', 'how to get away with murder', 'it\'s always sunny in philadelphia', 'rugrats' ];

for (var y = 5; y >=0; y--) {
  var guessRight = false;
  var guess2 = prompt('What shows do you think Ana likes?');
  for (var x = 0; x < showsILike.length; x++) {
    if (guess2 === showsILike[x].toLowerCase())
      guessRight = true;

  }
  if (guessRight) {
    alert('You are correct!');

  } else {
    alert('Sorry, try again!');

  }
}


if (userPoints >= 3) {
  alert('You Passed!!');
} else {
  alert('You failed..Try again..:(');
}
