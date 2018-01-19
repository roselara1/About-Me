'use strict';

var userPoints = 0;





alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + ' I\'m so glad you want to play my game to try to figure me out.');

//Question 1
function fiveQuestions(){
var question1 = prompt('Does Ana have any pets? ' , 'type yes or no').toLowerCase();

console.log(question1);

if (question1 === 'yes' || question1 === 'y') {
    //if its correct give them a point
    userPoints++; //If the answer is yes, they're going to get a point
} else {
    //if its not correct, tell them to try again
    alert('Sorry, but I do!');

}
alert(' You have ' + userPoints + ' points.')
}
fiveQuestions();
//Question 2
function fiveQuestions(){
var question2 = prompt('Is Ana an only child? ' , 'type yes or no').toLowerCase();

console.log(question2);

if (question2 === 'no' || question2 === 'n') {
    //if its correct give them a point
    userPoints++; //If the answer is yes, they're going to get a point
} else {
    //if its not correct, tell them to try again
    alert('Sorry, thats wrong! I have an older brother and two younger sisters.');

}
alert(' You have ' + userPoints + ' points.')
}
fiveQuestions();

// //Question 3

// var anaDrive = prompt('Does Ana know how to drive?' , 'type yes or no').toLowerCase();

// console.log(anaDrive);

// if (anaDrive === 'yes' || anaDrive === 'y') {
//     //if its correct give them a point
//     userPoints++; //If the answer is yes, they're going to get a point
// } else {
//     //if its not correct, tell them to try again
//     alert('Wrong again! ..but I do hate to drive. Please try again!');

// }
// alert(' You have ' + userPoints + ' points.')

// //Question 4

// var gameOfThrones = prompt(' Does Ana like Game of Thrones?' , 'type yes or no').toLowerCase();

// console.log(gameOfThrones);

// if (gameOfThrones === 'no' || gameOfThrones === 'n') {
//     //if its correct give them a point
//     userPoints++; //If the answer is yes, they're going to get a point
// } else {
//     //if its not correct, tell them to try again
//     alert('Sorry, but I have never seen an episode of that show.. Try again! :(');

// }
// alert(' You have ' + userPoints + ' points.')

// //Question 5

// var otherLanguage = prompt(' Does Ana speak any languages other than English?' , 'type yes or no').toLowerCase();

// console.log(otherLanguage);

// if (otherLanguage === 'yes' || otherLanguage === 'y') {
//     //if its correct give them a point
//     userPoints++; //If the answer is yes, they're going to get a point
// } else {
//     //if its not correct, tell them to try again
//     alert('Wrong, Ana knows how to speak Spanish.');

// }




// if (userPoints >= 3) {
//    alert('You Passed!!');
// } else {
//    alert('You failed..Try again..:(');
// }


// alert(' You have ' + userPoints + ' points.')