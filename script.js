function getComputerChoice() {
    randomNumber = Math.floor(Math.random) * 3;
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
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
        default :
            return 'Invalid selection';
    }
}

function game() {
    for (i = 0; i < 5; i++) {
            
        playRound();
    }
}