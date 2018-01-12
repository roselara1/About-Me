'use strict';

var userPoints = 0;



alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + ' I\'m so glad you want to play my game to try to figure me out.');

//Question 1

var answer = prompt('Does Ana have any pets? ' , 'type yes or no').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    //if its correct give them a point
    userPoints++; //If the answer is yes, they're going to get a point
} else {
    //if its not correct, tell them to try again
    alert('Sorry, but I do!');

}

alert(' you have ' + userPoints)

//Question 2

var answer = prompt('Is Ana an only child? ' , 'type yes or no').toLowerCase();

console.log(answer);

if (answer === 'no' || answer === 'n') {
    //if its correct give them a point
    userPoints++; //If the answer is yes, they're going to get a point
} else {
    //if its not correct, tell them to try again
    alert('Sorry, thats wrong! I have an older brother and two younger sisters.');

}

alert(' POINTS: ' + userPoints + '!!')

//Question 3

var answer = prompt('Does Ana know how to drive?' , 'type yes or no').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    //if its correct give them a point
    userPoints++; //If the answer is yes, they're going to get a point
} else {
    //if its not correct, tell them to try again
    alert('Wrong again! ..but I do hate to drive. Please try again!');

}

alert(' POINTS: ' + userPoints + '!!')

//Question 4

var answer = prompt(' Does Ana like Game of Thrones?' , 'type yes or no').toLowerCase();

console.log(answer);

if (answer === 'no' || answer === 'n') {
    //if its correct give them a point
    userPoints++; //If the answer is yes, they're going to get a point
} else {
    //if its not correct, tell them to try again
    alert('Sorry, but I have never seen an episode of that show.. Try again! :(');

}

alert(' POINTS: ' + userPoints + '!!')

//Question 5

var answer = prompt(' Does Ana speak any languages other than English?' , 'type yes or no').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    //if its correct give them a point
    userPoints++; //If the answer is yes, they're going to get a point
} else {
    //if its not correct, tell them to try again
    alert('Wrong, Ana knows how to speak Spanish.');

}

alert(' POINTS: ' + userPoints + '!!')