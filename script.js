function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]; 
    randomChoice = Math.floor(Math.random() * options.length) // Randomly returns a number in [0, 1, 2]
    return options[randomChoice]
}