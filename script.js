console.log("Welcome to the Rock Paper Scissors game.\n");

const CHOICES = ["Rock", "Paper", "Scissor"];
let userInput;
let humanScore = 0;
let computerScore = 0;

// Function for getting the user input
function getHumanChoice() {
    userInput = prompt("Enter you choice: ");
    return userInput.toLowerCase();
}

// Function for generating random number between 1 and 3
function getComputerChoice() {
    let arrayIndex = Math.floor(Math.random() * 3);
    return CHOICES[arrayIndex].toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissor") {
        console.log("Invalid input, Try again.");
        getHumanChoice();
    } else {
        
        console.log("Yours choice - " + humanChoice);
        console.log("Computer's choice - " + computerChoice);
        
        if ( humanChoice === computerChoice) {
            console.log("Tie!");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("Computer beat you!");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissor") {  
            console.log("You beat the computer!")
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You beat the computer!")
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissor") {
            console.log("Computer beat you!");
            computerScore++;
        } else if (humanChoice === "scissor" && computerChoice === "rock") {
            console.log("Computer beat you!");
            computerScore++;
        } else if (humanChoice === "scissor" && computerChoice === "paper") {
            console.log("You beat the computer!");
            humanScore++;
        }
    
    }
}

function playGame() {
    let count = 0;

    while (count < 5) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        
        count++;
    }

    console.log("Your score : " + humanScore);
    console.log("Computer score : " + computerScore);
}

playGame();