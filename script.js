'use strict';

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(userChoice => userChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    getComputerChoice();
    getResult(userChoice);
}));

function getComputerChoice () {
    const randomNumber = Math.floor((Math.random() * possibleChoices.length) + 1);
    switch (randomNumber) {
        case 1:
        computerChoice = 'rock';
        break;
        case 2:
        computerChoice = 'paper';
        break;
        case 3:
        computerChoice = 'scissors';
        break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(userChoice) {
    if (computerChoice === userChoice) {
        result = "It's a draw";
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        result = "You win!";
    }else if (userChoice === 'paper' && computerChoice === 'scissors') {
        result = "You lose!";
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        result = "You win!";
    }else if (userChoice === 'rock' && computerChoice === 'paper') {
        result = "You lose!";
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        result = "You win!";
    }else if (userChoice === 'scissors' && computerChoice === 'rock') {
        result = "You lose!";
    } else {
        result = 'gavno ebanoe';
    }
    resultDisplay.innerHTML = result;
}