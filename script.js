let humanScore = 0, computerScore = 0;

const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3)
    const choices = ["rock", "paper", "scissor"];
    return choices[random];
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

const playGame = () => {
    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice)
    }

    if(humanScore > computerScore) {
        console.log(`You won! Score: ${humanScore}-${computerScore}`);
    }
    else if(humanScore == computerScore) {
        console.log(`There is a draw! Score: ${humanScore}-${computerScore}`);
    }
    else {
        console.log(`You lose! Score: ${humanScore}-${computerScore}`);
    }
}
