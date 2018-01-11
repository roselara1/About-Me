'use strict';

var userPoints = 0;

console.log('Hello World!');

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + ' I\'m so glad you want to play my game');

var answer = prompt('Is Rachels favorite food kimchi? ' , 'type yes or no').toLowerCase();

console.log(answer);

//Check if the user's answer is correct
//What is correct?
//Find out what the answer is?
//toLowerCase or toUpperCase
//user a confirm box

if (answer === 'yes' || answer === 'y') {
    //if its correct give them a point
    userPoints++; //If the answer is yes, they're going to get a point
} else {
    //if its not correct, tell them to try again
    alert('Nope! I love all spicy food.');

}

alert(' you have ' + userPoints)


