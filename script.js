console.log("Welcome to the Rock Paper Scissors game.\n");

const choices = ["Rock", "Paper", "Scissors"];
const userInput = prompt("Enter the choice of you number:\n Rock - 1\n Paper - 2\n Scissors - 3");
const userChoice = Number(userInput);
const computerChoice = getComputerChioce();


// Function for generating random number between 1 and 3
function getComputerChioce() {
    let arrayIndex = Math.floor(Math.random() * 3) + 1;
    return arrayIndex;
}

if (userChoice > 3 || userChoice < 1) {
    console.log("Invalid number, choose a number between 1 and 3.");
} else {
    
    console.log("Yours choice - " + userChoice);
    console.log("Computer's choice - " + computerChoice);
    
    if ( userChoice === computerChoice) {
        console.log("Tie!");
    } else if (userChoice === 1 && computerChoice === 2) {
        console.log("Computer beat you!");
    } else if (userChoice === 1 && computerChoice === 3) {  
        console.log("You beat the computer")
    } else if (userChoice === 2 && computerChoice === 1) {
        console.log("You beat the computer")
    } else if (userChoice === 2 && computerChoice === 3) {
        console.log("Computer beat you!");
    } else if (userChoice === 3 && computerChoice === 1) {
        console.log("Computer beat you!");
    } else if (userChoice === 3 && computerChoice === 2) {
        console.log("You beat the computer!");
    }

}