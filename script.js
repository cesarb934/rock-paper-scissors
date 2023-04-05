let buttons = document.getElementsByTagName('button');
let roundResult = document.querySelector('.round-result');
let matchResult = document.querySelector('.match-result');
let roundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function displayResult(string) {
    console.log(string.charAt(4));
    if (string.charAt(4) === 'W') playerWins++;
    if (string.charAt(4) === 'L') computerWins++;
    roundResult.textContent = `Round ${roundsPlayed + 1}: ${string}`;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') return 'You Lose! Paper beats Rock';
            if (computerSelection === 'scissors') return 'You Win! Rock beats Scissors';
            if (computerSelection === 'rock') return 'You Tie!';
            break;
        case 'paper':
            if (computerSelection === 'paper') return 'You Tie!';
            if (computerSelection === 'scissors') return 'You Lose! Scissors beats Paper';
            if (computerSelection === 'rock') return 'You Win! Paper beats Rock';
            break;
        case 'scissors':
            if (computerSelection === 'paper') return 'You Win! Scissors beat Paper';
            if (computerSelection === 'scissors') return 'You Tie!';
            if (computerSelection === 'rock') return 'You Lose! Rock beats Scissors';
            break;
        default:
            return 'Invalid selection';
    }

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        displayResult(playRound(buttons[i].textContent, getComputerChoice()));
        roundsPlayed++;
        if (roundsPlayed === 5) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            };
            if (playerWins > computerWins){
                matchResult.textContent = 'Player Wins';
            }else if (playerWins < computerWins){
                matchResult.textContent = 'Computer Wins';
            }else{
                matchResult.textContent = "It's a Tie";
            }
        }
    });
}

