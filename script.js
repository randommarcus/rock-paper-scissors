console.log("Hello World!!");

let computerChoice = " ";
let humanChoice = " ";

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
