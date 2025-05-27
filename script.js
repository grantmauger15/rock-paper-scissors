let humanScore, computerScore = 0

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

const getHumanChoice = () => {
    let humanChoice = prompt("Enter rock, paper, or scissors");

    return humanChoice;
}

const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice == computerChoice) {
        console.log("There is a tie! No one wins.");
    }
    else if(humanChoice == "scissors") {
        if(computerChoice == "paper") {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
        else {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        }
        
    }
    else if(humanChoice == "paper") {
        if(computerChoice == "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
        else {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
    }
    else {
        if(computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
        else {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
    }
}