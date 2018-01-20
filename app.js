'use strict';

var userPoints = 0;

alert('Welcome to My Guessing Game!');

var user = prompt('What is your name?');

alert('Hi ' + user + ', I\'m so glad you want to play my game to get to know me!');



// //Question 1 is below
function sevenQuestions() {

var answer = prompt('Do you think Ana has any pets? ' , 'type yes or no').toLowerCase();
console.log(answer);


  var answer = prompt('Do you think Ana has any pets? ' , 'type yes or no').toLowerCase();
  console.log(answer);

  if (answer === 'no' || answer === 'n') {
  //if its correct give them a point
    userPoints++; //If the answer is no, they're going to get a point
  } else {
  //if its not correct, tell them to try again

  alert('Sorry, but I don\'t have any pets! My landlord won\'t allow it. Please try again.');
}


//alert below lets user know how many points they have
alert(' You have ' + userPoints + ' points.');

    alert('Sorry, but I don\'t have any pets! My landlord won\'t allow it. Please try again.');
  }
  //alert below lets user know how many points they have
  alert(' You have ' + userPoints + ' points.');




  // //Question 2 is below

  var onlyChild = prompt('Is Ana an only child? ' , 'type yes or no').toLowerCase();
  console.log(onlyChild); //print the answer in the console

  if (onlyChild === 'no' || onlyChild === 'n') {
  //if its correct give them a point
    userPoints++; //If the answer is no, they're going to get a point
  } else {
  //if its not correct, tell them to try again

  alert('Sorry, thats wrong! Ana has an older brother and two younger sisters. Please try again.');
}

//alert below lets user know how many points they have
alert(' You have ' + userPoints + ' points.');

    alert('Sorry, thats wrong! Ana has an older brother and two younger sisters. Please try again.');
  }
  //alert below lets user know how many points they have
  alert(' You have ' + userPoints + ' points.');




  // //Question 3 is below

  var anaDrive = prompt('Do you think Ana knows how to drive?' , 'type yes or no').toLowerCase();
  console.log(anaDrive);//prints the answer in the console

  if (anaDrive === 'yes' || anaDrive === 'y') {
  //if its correct give them a point
    userPoints++; //If the answer is yes, they're going to get a point
  } else {
  //if its not correct, tell them to try again
    alert('Wrong again! ..but I do hate to drive so I avoid it as much as I can. Please try again!');
  }
  //alert below lets user know how many points they have
  alert(' You have ' + userPoints + ' points.');



  // //Question 4 is below

  var gameOfThrones = prompt(' Do you think Ana likes Game of Thrones?' , 'type yes or no').toLowerCase();
  console.log(gameOfThrones); //prints the answer in the console

  if (gameOfThrones === 'no' || gameOfThrones === 'n') {
  //if its correct give them a point
    userPoints++; //If the answer is no, they're going to get a point
  } else {
  //if its not correct, tell them to try again
    alert('Sorry, but I have never seen an episode of that show.. Try again! :(');
  }
  //alert below lets user know how many point they have
  alert(' You have ' + userPoints + ' points.');



  // //Question 5 is below

  var otherLanguage = prompt(' Do you think Ana can speak any languages other than English?' , 'type yes or no').toLowerCase();
  console.log(otherLanguage);// prints the answer in the console

  if (otherLanguage === 'yes' || otherLanguage === 'y') {
  //if its correct give them a point
    userPoints++; //If the answer is yes, they're going to get a point
  } else {
  //if its not correct, tell them to try again
    alert('Wrong, Ana knows how to speak Spanish.');
  }
  //alert below lets user know how many points they have left
  alert(' You have ' + userPoints + ' points.');

}

fiveQuestions();

//Question 6 is below

var anasAge = 24;

for (var i = 3; i >=0; i--) { //
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
//alert below lets user know how many points they have
alert(' You have ' + userPoints + ' points.');



// Question 7 is below

//below is an array of the 'shows I like'
var showsILike = [ 'the office', 'dexter', 'stranger things', 'rupaul\'s drag race', 'it\'s always sunny in philadelphia' ];

//for loop begins here
for (var y = 6; y >0; y--) { //this is the counter
  var guessRight = false;
  var guess2 = prompt('What shows do you think Ana likes?');

  for (var x = 0; x < showsILike.length; x++) { //showsILike.length is 6 (if x<6, add 1)
    if (guess2 === showsILike[x].toLowerCase()) guessRight = true;
  }

  if (guessRight === true) {
    var message = 'You are correct, but Ana also likes ' ;
    for (x = 0; x < showsILike.length; x++) {

      if (showsILike[x] === guess2) continue; // continue means to skip over and not display, which is why it doesnt matter whether or not we add a period or comma (dont display what they guess if its correct)

      if (x===showsILike.length -1){
        message += (showsILike[x] + '.'); //this displays the message without the correct answer
      } else {
        message += (showsILike[x] + ', ');
      }
    }
    //for loop ends here

    alert(message);
    console.log(showsILike);
    userPoints++;//this gives the user a point
    y = 0;

    //If users input is incorrect, the message below will display.
  } else {
    alert('Sorry, that is incorrect. You have ' + y + ' guesses left. Try again!');

  }

  //if OVERALL userPoints is greater than or equal to 5, then display the first alert
  if (userPoints >= 5) {
    alert('You got ' + userPoints + ' out of 7 questions correct, ' + user + ', Great Job! You passed!');
  //if OVERALL userPoints is not greater than or equal to 5, then display the second alert
  } else {
    alert('You got ' + userPoints + ' out of 7 questions correct, ' + user + '. Better luck next time! ');
  }
}
}
sevenQuestions();

}
alert(' You have ' + userPoints + ' points.');


//if OVERALL userPoints is greater than or equal to 5, then display the first alert
if (userPoints >= 5) {
  alert('You got ' + userPoints + ' out of 7 questions correct, ' + user + ', Great Job! You passed!');
//if OVERALL userPoints is not greater than or equal to 5, then display the second alert
} else {
  alert('You got ' + userPoints + ' out of 7 questions correct, ' + user + ', Better luck next time! ');
}
