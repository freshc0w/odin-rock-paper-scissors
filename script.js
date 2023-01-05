function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]; 
    randomChoice = Math.floor(Math.random() * options.length) // Randomly returns a number in [0, 1, 2]
    return options[randomChoice]
}

function playRound(playerSelection, computerSelection=getComputerChoice()) {
    playerSelection = playerSelection.toLowerCase();

    let win = (playerSelection === "rock" && computerSelection === "scissors")
    || (playerSelection === "paper" && computerSelection === "rock")
    ||(playerSelection === "scissors" && computerSelection === "paper");

    let lose = (computerSelection === "rock" && playerSelection === "scissors")
    || (computerSelection === "paper" && playerSelection=== "rock")
    ||(computerSelection === "scissors" && playerSelection === "paper")

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (win) {
        return `You won! ${playerSelection} beats ${computerSelection}`; // Winning conditions satisfied
    } else if (lose) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        playerSelection = prompt("Invalid move! Try again!");
        return playRound(playerSelection);
    }
}