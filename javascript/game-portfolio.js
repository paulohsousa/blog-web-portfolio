const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice();
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    if (randomNumber === 4) {
        computerChoice = 'lizard';
    }
    if (randomNumber === 5) {
        computerChoice = 'spock';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!';
    } if ((computerChoice === 'rock' && userChoice === 'paper') ||
        (computerChoice === 'paper' && userChoice === 'scissors') ||
        (computerChoice === 'scissors' && userChoice === 'rock') || (computerChoice === 'lizard' && userChoice === 'rock') ||
        (computerChoice === 'spock' && userChoice === 'lizard') || (computerChoice === 'spock' && userChoice === 'scissors') ||
        (computerChoice === 'lizard' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'lizard') ||
        (computerChoice === 'spock' && userChoice === 'paper') || (computerChoice === 'rock' && userChoice === 'spock')) {
        result = "You win!"

    } else if ((computerChoice === 'rock' && userChoice === 'paper') ||
        (computerChoice === 'paper' && userChoice === 'scissors') ||
        (computerChoice === 'scissors' && userChoice === 'rock') || (computerChoice === 'lizard' && userChoice === 'rock') ||
        (computerChoice === 'spock' && userChoice === 'lizard') || (computerChoice === 'spock' && userChoice === 'scissors') ||
        (computerChoice === 'lizard' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'lizard') ||
        (computerChoice === 'spock' && userChoice === 'paper') || (computerChoice === 'rock' && userChoice === 'spock')) {
        result = "You lose!"
    }
    resultDisplay.innerHTML = result;
}