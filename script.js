//Initisalise rock, paper, scissors button.
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const options = ["rock", "paper", "scissors"];

// add body text
const container = document.querySelector('#container')
const content = document.createElement('p')
content.textContent = 'bat'
container.appendChild(content)

// Add eventListeners for each corresponding buttons w/ arg in playRound
// depending on the btn.
rockBtn.addEventListener("click", function () {
    playRound('rock');
});
paperBtn.addEventListener("click", function () {
    playRound('paper');
});
scissorsBtn.addEventListener("click", function () {
    playRound('scissors');
});

function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * options.length) // Randomly returns a number in [0, 1, 2]
    return options[randomChoice]
}

function playRound(playerSelection) {
    const content = document.createElement('p')

    computerSelection = getComputerChoice()

    let win = (playerSelection === "rock" && computerSelection === "scissors")
    || (playerSelection === "paper" && computerSelection === "rock")
    ||(playerSelection === "scissors" && computerSelection === "paper");

    let lose = (computerSelection === "rock" && playerSelection === "scissors")
    || (computerSelection === "paper" && playerSelection=== "rock")
    ||(computerSelection === "scissors" && playerSelection === "paper")
    
    if (playerSelection === computerSelection) {
        content.textContent = 'It\'s a tie.';
    } else if (win) {
        content.textContent = `You won! ${playerSelection} beats ${computerSelection}`; // Winning conditions satisfied
    } else if (lose) {
        content.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        content.textContent = "Invalid Move! Try again!";
    }
    container.appendChild(content)
}


// function playRound(playerSelection="rock", computerSelection=getComputerChoice()) {
//     // playerSelection = playerSelection.toLowerCase();

//     let win = (playerSelection === "rock" && computerSelection === "scissors")
//     || (playerSelection === "paper" && computerSelection === "rock")
//     ||(playerSelection === "scissors" && computerSelection === "paper");

//     let lose = (computerSelection === "rock" && playerSelection === "scissors")
//     || (computerSelection === "paper" && playerSelection=== "rock")
//     ||(computerSelection === "scissors" && playerSelection === "paper")

//     if (playerSelection === computerSelection) {
//         return "It's a tie!";
//     } else if (win) {
//         return `You won! ${playerSelection} beats ${computerSelection}`; // Winning conditions satisfied
//     } else if (lose) {
//         return `You lose! ${computerSelection} beats ${playerSelection}`;
//     } else {
//         console.log("Invalid Move! Try again!")
//         playRound()

// function game() {
//     let userScore = 0;
//     let botScore = 0;
//     for (let i=0; i < 5; i++) {
//         let playerSelection = prompt("Your move?", 'rock');
//         result = playRound(playerSelection);

//         outcome = result.split(' ');
//         if (outcome[1] === "won!") {
//             userScore += 1; 
//         } else if (outcome[1] === "lose!") {
//             botScore += 1;
//         } 
//         console.log(result)
//     }

    
//     if (userScore > botScore) {
//         alert( "Congrats! You won against the bot!");
//     } else if (botScore > userScore) {
//         alert( "Oh no! You lost to a BOT!");
//     } else {
//         alert( "It's a tie!");
//     }

//     finalOutcome = (`You won ${userScore}, lost ${botScore} and tied ${5 - (userScore + botScore)} times.`);
//     console.log(finalOutcome);
//     return finalOutcome;
// }

