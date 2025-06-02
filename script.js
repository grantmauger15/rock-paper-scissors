let humanScore = 0, computerScore = 0;
const choices = document.querySelector('#choices');
const output = document.querySelector('#output > h1');
const score = document.querySelector('#output > h2');
const winner = document.querySelector("#output > h3");

choices.addEventListener("click", (e) => {
    switch(e.target.id) {
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
    }
    updateScore();
});

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3)

    switch(choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const playRound = (humanChoice, computerChoice) => {
    if(humanChoice === computerChoice) {
        output.textContent = "There is a tie! No one wins.";
    }
    else if(humanChoice === "scissors") {
        if(computerChoice === "paper") {
            
            output.textContent = "You win! Scissors beats Paper.";
            humanScore++;
        }
        else {
            output.textContent = "You lose! Rock beats Scissors.";
            computerScore++;
        }
        
    }
    else if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            output.textContent = "You win! Paper beats Rock.";
            humanScore++;
        }
        else {
            output.textContent = "You lose! Scissors beats Paper.";
            computerScore++;
        }
    }
    else {
        if(computerChoice === "scissors") {
            output.textContent = "You win! Rock beats Scissors.";
            humanScore++;
        }
        else {
            output.textContent = "You lose! Paper beats Rock.";
            computerScore++;
        }
    }
}

const updateScore = () => {
    score.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;
    winner.textContent = '';
    if(humanScore === 5) {
        winner.textContent = 'The player won! The game is reset.';
        humanScore = 0, computerScore = 0;
    }
    if(computerScore === 5) {
        winner.textContent = 'The computer won! The game is reset.';
        humanScore = 0, computerScore = 0;
    }

}