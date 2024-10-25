console.log("Hello World!!");

let computerChoice = " ";
let humanChoice = " ";
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice = 0)
        computerChoice = "rock";
    else if (choice = 1)
        computerChoice = "paper";
    else
        computerChoice = "scissors";
}

getComputerChoice();
console.log(computerChoice);

function getHumanChoice() {
    let choice = prompt("What do you choose? Rock, Paper, or Scissors?");
    humanChoice = choice.toLowerCase();
}

getHumanChoice();
console.log(humanChoice);

function playRound(computerChoice, humanChoice) {
    if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "rock"))
        console.log("Computer Won!!")
        computerScore += 1;
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock"))
        console.log("You Won!!")
        humanScore += 1;
    else
        console.log ("That's a tie!!")
}
